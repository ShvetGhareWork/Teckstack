const userModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

// Token creation function
const createToken = (id) => {
  const secretKey = process.env.JWT_SECRET || "default value"; // Default in case .env isn't loading
  console.log("JWT_SECRET:", secretKey); // Log to check the value

  return jwt.sign({ id }, secretKey);
};

// Route for user login!
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if email and password exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exists" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token, userId: user._id });
    } else {
      return res.json({ success: false, message: "Incorrect crecidentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for user registration!
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User Already exists!!!" });
    }

    // Validate email and password format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid Email!!!",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password!!!",
      });
    }

    // Hash the user's password
    const salt = await bcrypt.genSalt(7);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user in the database
    const user = await newUser.save();
    console.log("New User Created:", user); // Log the newly created user

    // Generate a token for the user
    const token = createToken(user._id);

    // Log the generated token and user info for debugging
    console.log("Generated Token for User:", token);
    console.log("User ID:", user._id);
    // localStorage.setItem("UserID", user._id);

    // Respond with the generated token
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid Cresidentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const Profile = async (req, res) => {
  try {
    const userId = req.user.id; // Get the user ID from the request (set by AuthUser middleware)
    const user = await userModel.findById(userId).select("-password"); // Exclude the password field

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user }); // Respond with the user data
  } catch (error) {
    console.error("Error in Profile function:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const saveUserDetails = async (req, res) => {
  try {
    const userId = req.user.id; // Get the user ID from the request (set by AuthUser middleware)
    const {
      fullName,
      profilePicture,
      tagline,
      location,
      email,
      phone,
      website,
      github,
      linkedin,
      twitter,
      jobTitle,
      company,
      department,
      experience,
      availability,
      relocation,
      salary,
      primarySkills,
      programmingLanguages,
      technologies,
      tools,
      certifications,
      softSkills,
      techStack,
      experienceDetails,
      projects,
      education,
    } = req.body;

    // Update the user's details in the database
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      {
        fullName,
        profilePicture,
        tagline,
        location,
        email,
        phone,
        website,
        github,
        linkedin,
        twitter,
        jobTitle,
        company,
        department,
        experience,
        availability,
        relocation,
        salary,
        primarySkills,
        programmingLanguages,
        technologies,
        tools,
        certifications,
        softSkills,
        techStack,
        experienceDetails,
        projects,
        education,
      },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      message: "User details updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error in saveUserDetails function:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  loginUser,
  registerUser,
  adminLogin,
  Profile,
  saveUserDetails, // Export the new function
};
// This code defines a user authentication system using JWT for token generation and bcrypt for password hashing. It includes functions for user login, registration, and admin login, with validation checks for email format and password strength. The code also handles error logging and responses to the client. The JWT secret is retrieved from environment variables for security.
