import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected Successfully.", connection.connection.host);
  } catch (error) {
    console.log({
      error,
      message: "MongoDB Connection Failed. Make sure MongoDB is running.",
    });
  }
};

export default connectDB;
