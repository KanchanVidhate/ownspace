const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// ---------------- ROUTES IMPORT ----------------
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

// ---------------- BASE ROUTE ----------------
app.get("/", (req, res) => {
  res.send("Own Space API Running...");
});

// ---------------- ROUTES USE ----------------
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// ---------------- SERVER ----------------
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});