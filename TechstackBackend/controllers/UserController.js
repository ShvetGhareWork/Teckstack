const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

// Helper function to create a JWT token
const createToken = (id) => {
  const secretKey = process.env.JWT_SECRET || "defaultSecretKey";
  return jwt.sign({ id }, secretKey);
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required." });
    }

    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials." });
    }

    // Generate token
    const token = createToken(user._id);

    res
      .status(200)
      .json({ success: true, message: "Login successful.", token });
  } catch (error) {
    console.error("Error in loginUser:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password, skills, bio, location, phone } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required.",
      });
    }

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email is already registered." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
      skills,
      bio,
      location,
      phone,
    });

    const savedUser = await newUser.save();

    // Generate token
    const token = createToken(savedUser._id);

    res
      .status(201)
      .json({ success: true, message: "User registered successfully.", token });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// Admin Login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required." });
    }

    // Find admin by email
    const admin = await UserModel.findOne({ email, role: "admin" });
    if (!admin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin not found." });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials." });
    }

    // Generate token
    const token = createToken(admin._id);

    res
      .status(200)
      .json({ success: true, message: "Admin login successful.", token });
  } catch (error) {
    console.error("Error in adminLogin:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// Profile
const Profile = async (req, res) => {
  try {
    const userId = req.user.id;

    // Find user by ID
    const user = await UserModel.findById(userId).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error in Profile:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// Save User Details
const saveUserDetails = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, skills, bio, location, phone } = req.body;

    // Update user details
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { name, skills, bio, location, phone },
      { new: true }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    res.status(200).json({
      success: true,
      message: "User details updated successfully.",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error in saveUserDetails:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

module.exports = {
  loginUser,
  registerUser,
  adminLogin,
  Profile,
  saveUserDetails,
};
