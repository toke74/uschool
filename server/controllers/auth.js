import jwt from "jsonwebtoken";
import User from "../models/User";
import { hashPassword, comparePassword } from "../utils/auth";

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
export const register = async (req, res) => {
  try {
    // console.log(req.body);
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
    const user = new User({
      fName,
      lName,
      email,
      password: hashedPassword,
    });

    await user.save();

    // console.log("saved user", user);
    return res.json({ ok: true });
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
