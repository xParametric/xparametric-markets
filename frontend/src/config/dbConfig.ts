import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

export function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  const connecterOptions: any = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbname: "xparametric",
  };
  try {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.NEXT_APP_MONGODB_URL!, connecterOptions);
    connection.isConnected = mongoose.connection.readyState;
    mongoose.connection.on("error", () => {
      throw new Error("Mongoose Connection Failed");
    });
    mongoose.connection.once("open", () => {
      console.log("Mongoose Connection Established", mongoose.connection.host);
    });
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}
