import dbConnect from "@/config/dbConfig";
import UserModel from "@/app/api/models/userModel"; // assuming you have a User model
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  // await dbConnect();
  // res.status(200).send("Hello world");
  return new Response("Hello world", { status: 200 });

  // const {
  //   query: { id },
  // } = req;

  // try {
  //   const user = await UserModel.findById(id); // fetch user from database
  //   res.status(200).json({ success: true, data: user });
  // } catch (error) {
  //   res.status(400).json({ success: false });
  // }
}
