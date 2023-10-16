const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path"); // Corrected import statement
const dotenv = require("dotenv");

dotenv.config({ path: "Backend/Config/config.env" });

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const User = require("./Route/UserRoute");

app.use("/api/v1", User);

// Serve static files from the 'config' directory
app.use(express.static(path.join(__dirname, "config")));

module.exports = app;
