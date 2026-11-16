
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("INTERIOR FURNITURE UK Backend is running!");
});

// API test route
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "Interior Furniture UK API connected successfully!"
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
