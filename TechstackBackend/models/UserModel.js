const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  name: String,
});

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    professionalTitle: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    skills: [String], // Array of skills
    phone: {
      type: String,
      default: "",
    },
    profileImage: {
      type: String,
      default: "", // URL or path for profile image
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
