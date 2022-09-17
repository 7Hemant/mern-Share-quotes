import mongoose from "mongoose";

const connectedDB = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected database ${connected.connection.host}`);
  } catch (error) {
    console.log(`server error ${error}`);
  }
};

export default connectedDB;
