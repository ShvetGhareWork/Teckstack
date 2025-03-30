const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // Import CORS middleware
const connectDB = require("./config/mongodb");
const userRouter = require("./routes/UserRoute");

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 7007;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json());

// Routes
app.use("/api/user", userRouter);

// Basic route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
