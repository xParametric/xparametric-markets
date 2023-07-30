// userModel.ts
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
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

  _id: {
    type: String,
  },

  nonce: {
    type: String,
  },
  chainId: {
    type: Number,
    required: true,
  },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
