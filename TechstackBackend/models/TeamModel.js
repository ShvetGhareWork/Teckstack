const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    teamName: { type: String, required: true },
    teamLeader: { type: String, required: true },
    teamMembers: [
      {
        name: { type: String, required: true },
        email: { type: String, required: true },
        role: { type: String, required: true },
      },
    ],
    skills: [{ type: String }], // Add skills as an array of strings
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", TeamSchema);
