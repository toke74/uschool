import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      trim: true,
      required: [true, "Please add a first name"],
    },
    lName: {
      type: String,
      trim: true,
      required: [true, "Please add a last name"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please add an email"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      min: 6,
      max: 64,
      select: false,
    },
    picture: {
      type: String,
      default: "/avatar.png",
    },
    role: {
      type: [String],
      default: ["Subscriber"],
      enum: ["Subscriber", "Instructor", "Admin"],
    },
    stripe_account_id: "",
    stripe_seller: {},
    stripeSession: {},
    verified: { type: Boolean, default: false },
  },
  { timestamps: true }
);
export default mongoose.model("User", UserSchema);
