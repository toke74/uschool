import jwt from "jsonwebtoken";
import crypto from "crypto";
import User from "../models/User";
import UserVerification from "../models/UserVerification";
import { hashPassword, comparePassword } from "../utils/auth";
import { sendEmail } from "../utils/sendEmail";

//Load env vars
require("dotenv").config({ path: "../config/config.env" });

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
export const register = async (req, res) => {
  try {
    const { fName, lName, email, password } = req.body;

    // validation
    if (!fName) return res.status(400).send("First name is required");
    if (!lName) return res.status(400).send("Last name is required");
    if (!email) return res.status(400).send("email is required");

    if (!password || password.length < 6 || password.length > 64) {
      return res
        .status(400)
        .send(
          "Password is required and  should be min of 6 and max of 64 characters long"
        );
    }

    //check if user exist
    let userExist = await User.findOne({ email }).exec();

    //if user exist in db return error to client
    if (userExist) return res.status(400).send("Email is taken");

    // hash password
    const hashedPassword = await hashPassword(password);

    // register
    const user = await new User({
      fName,
      lName,
      email,
      password: hashedPassword,
    }).save();

    const verifyUser = await new UserVerification({
      userId: user._id,
      uniqueString: crypto.randomBytes(32).toString("hex"),
    }).save();

    const url = `${process.env.BASE_URL}verify/${user.id}/${verifyUser.uniqueString}`;

    const options = {
      email: user.email,
      subject: "Verify Your Email",
      message: `<p>Verify your email address to complete the signup  and Login into your account.</p> <p>This is link <b> expires in 1 hours </b> </p> <p> Press <a href=${url}> Here </a> to proceed. </p>`,
    };

    sendEmail(options);

    return res.status(200).send("An Email sent to your account, Please verify");
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validating user data
    if (!email) return res.status(400).send("Please provide an email");
    if (!password) {
      return res.status(400).send("Please provide  password");
    }

    // check if our db has user with that email
    const user = await User.findOne({ email }).select("+password").exec();
    if (!user)
      return res
        .status(401)
        .send("There was a problem logging in. Check your email and password.");

    // Check if password matches
    const isMatch = await comparePassword(password, user.password);

    if (!isMatch)
      return res
        .status(401)
        .send("There was a problem logging in. Check your email and password.");

    if (!user.verified) {
      let verifyUser = await UserVerification.findOne({ userId: user._id });

      if (!verifyUser) {
        verifyUser = await new UserVerification({
          userId: user._id,
          uniqueString: crypto.randomBytes(32).toString("hex"),
        }).save();
      }
      const url = `${process.env.BASE_URL}verify/${user.id}/${verifyUser.uniqueString}`;

      const options = {
        email: user.email,
        subject: "Verify Your Email",
        message: `<p>Verify your email address to complete the signup  and Login into your account.</p> <p>This is link <b> expires in 1 hours </b> </p> <p> Press <a href=${url}> Here </a> to proceed. </p>`,
      };
      console.log(url);
      sendEmail(options);

      return res
        .status(400)
        .send("An Email sent to your account, Please verify");
    }

    // create signed jwt
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    // return user and token to client, exclude hashed password
    user.password = undefined;

    // send token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      // secure: true, // only works on https
    });

    // send user as json response
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error. Try again.");
  }
};

// @desc      Get Verify  user email
// @route     GET /api/v1/auth/verify/:id/:uniqueString
// @access    Public
export const verifyUserEmail = async (req, res) => {
  try {
    const { id, uniqueString } = req.params;

    const user = await User.findOne({ _id: id });
    if (!user) return res.status(400).send("User not exist, Please Register");

    const verifyUser = await UserVerification.findOne({
      userId: user._id,
      uniqueString: uniqueString,
    });

    if (!verifyUser) return res.status(400).send("Invalid link");

    await User.updateOne({ _id: user._id, verified: true });
    await verifyUser.remove();

    return res.status(200).send("Email verified successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

// @desc      Logout user
// @route     GET /api/v1/auth/logout
// @access    Public
export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ message: "You signout successfully" });
  } catch (err) {
    console.log(err);
  }
};

// @desc      Get Current user
// @route     GET /api/v1/auth/current-user
// @access    Private
export const currentUser = async (req, res) => {
  try {
    await User.findById(req.user._id).select("-password").exec();
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};
