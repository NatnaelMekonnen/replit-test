require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001; // Changed from 3000 to 3001

app.use(express.json({ limit: "10mb" }));

app.use(cors());

app.get("/api", (req, res) => {
  console.log("Test endpoint hit");
  res.json({ message: "Server is running" });
});

app.get("*", (req, res) => {
  res.status(404).json({ message: "Route not found" }).send();
});

app.listen(port, () => {
  console.log(
    `Server is running on ${
      process.env.REACT_APP_API_URL || `http://localhost:${port}`
    }`,
  );
});
