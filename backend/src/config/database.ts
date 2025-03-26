import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI || "")
      .then(() => console.log("Connected to MongoDB..."))
      .catch(() => console.error("Could not connect to MongoDB..."));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
