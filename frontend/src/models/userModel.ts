// userModel.ts
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    //   username: {
    //     type: String,
    //     required: [true, "Please provide a username"],
    //     unique: true,
    //   },
    //   email: {
    //     type: String,
    //     required: [true, "Please provide a email"],
    //     unique: true,
    //   },
    //   password: {
    //     type: String,
    //     required: [true, "Please provide a password"],
    //   },

    walletAddress: {
      type: String,
      required: [true, "Please provide a wallet address"],
      unique: true,
    },

    chainId: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
