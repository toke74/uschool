import User from "../models/User";
import { hashPassword, comparePassword } from "../utils/auth";

export const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { fName, lName, email, password } = req.body;

    // validation
    if (!fName) return res.status(400).send("First name is required");
    if (!lName) return res.status(400).send("Last name is required");
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
