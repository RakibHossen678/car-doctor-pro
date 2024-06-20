import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const booking = await request.json();
  const db = await connectDB();
  const bookingsCollection = db.collection("booking");
  try {
    const newBooking = await bookingsCollection.insertOne(booking);
    return Response.json({ message: "Service Booked Successfully" });
  } catch (error) {
    console.log(error);
  }
};
