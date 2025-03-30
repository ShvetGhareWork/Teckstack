const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    // No need for useNewUrlParser or useUnifiedTopology in MongoDB Driver v4.0+
    await mongoose.connect(process.env.MONGODB_URL, {
      // Removed deprecated options
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
// This code connects to a MongoDB database using Mongoose. It uses async/await syntax for better readability and error handling. The connection URL is stored in an environment variable for security. If the connection fails, it logs the error and exits the process.
