const mongoose = require("mongoose");

const server = "127.0.0.1:27017";
const database = "DataUser";

const connectDatabase = async () => {
  try {
    await mongoose.connect(`mongodb://${server}/${database}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDatabase;
