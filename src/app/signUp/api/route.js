import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return Response.json({ message: "User Exist" }, { status: 303 });
    }
    const hashedPassword = await bcrypt.hash(newUser.pass, 14);
    const res = await userCollection.insertOne({
      ...newUser,
      pass: hashedPassword,
    });
    return Response.json({ message: "User Created" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Something Went Wrong", error },
      { status: 500 }
    );
  }
};
