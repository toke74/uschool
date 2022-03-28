import mongoose from "mongoose";

const UserVerificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
    unique: true,
  },
  uniqueString: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 3600 },
});
export default mongoose.model("UserVerification", UserVerificationSchema);
