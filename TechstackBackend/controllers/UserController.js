const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

// JWT creation helper
const createToken = (id) => {
  const secretKey = process.env.JWT_SECRET || "defaultSecretKey";
  return jwt.sign({ id }, secretKey, { expiresIn: "1d" });
};

// 🔐 Register a new user
const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      skills = [],
      bio = "",
      location = "",
      phone = "",
      role = "user",
    } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required.",
      });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email is already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
      skills,
      bio,
      location,
      phone,
      role,
    });

    const savedUser = await newUser.save();
    const token = createToken(savedUser._id);

    res
      .status(201)
      .json({ success: true, message: "User registered successfully.", token });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// 🔓 User Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required." });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials." });
    }

    const token = createToken(user._id);

    res
      .status(200)
      .json({ success: true, message: "Login successful.", token });
  } catch (error) {
    console.error("Error in loginUser:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// 🔐 Admin Login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required." });
    }

    const admin = await UserModel.findOne({ email, role: "admin" });
    if (!admin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin not found." });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials." });
    }

    const token = createToken(admin._id);

    res
      .status(200)
      .json({ success: true, message: "Admin login successful.", token });
  } catch (error) {
    console.error("Error in adminLogin:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// 👤 Get user profile
const getProfile = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const user = await UserModel.findById(userId).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error in getProfile:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// ✏️ Update user profile
const saveUserDetails = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { name, skills, bio, location, phone } = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { name, skills, bio, location, phone },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    res.status(200).json({
      success: true,
      message: "User details updated.",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error in saveUserDetails:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

module.exports = {
  registerUser,
  loginUser,
  adminLogin,
  getProfile,
  saveUserDetails,
};
