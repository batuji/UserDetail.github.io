const app = require("./app");
const dotenv = require("dotenv");

const connectDatabase = require("../Backend/Config/database.js");

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled exception");
  process.exit(1);
});

// Configuration
dotenv.config({ path: "../Backend/Config/config.env" });

// Connect to the database
connectDatabase();

// Start the server

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
