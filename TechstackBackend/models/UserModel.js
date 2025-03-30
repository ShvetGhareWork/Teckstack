const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String },
    profilePicture: { type: String },
    tagline: { type: String },
    location: { type: String },
    phone: { type: String },
    website: { type: String },
    github: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    jobTitle: { type: String },
    company: { type: String },
    department: { type: String },
    experience: { type: Number },
    availability: { type: String },
    relocation: { type: Boolean },
    salary: { type: String },
    primarySkills: { type: [String] },
    programmingLanguages: { type: [String] },
    technologies: { type: [String] },
    tools: { type: [String] },
    certifications: { type: String },
    softSkills: { type: [String] },
    techStack: { type: String },
    experienceDetails: { type: Array },
    projects: { type: Array },
    education: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
