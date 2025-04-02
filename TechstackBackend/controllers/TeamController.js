const TeamModel = require("../models/TeamModel");

// Create a new team
const createTeam = async (req, res) => {
  try {
    const { teamName, teamLeader, teamMembers, skills = [] } = req.body; // Default skills to an empty array

    if (!teamName || !teamLeader || !teamMembers || teamMembers.length < 1) {
      return res.status(400).json({
        success: false,
        message: "Team name, leader, and at least one member are required.",
      });
    }

    const newTeam = new TeamModel({
      teamName,
      teamLeader,
      teamMembers,
      skills,
    });

    const savedTeam = await newTeam.save();

    res.status(201).json({
      success: true,
      message: "Team created successfully.",
      team: savedTeam,
    });
  } catch (error) {
    console.error("Error in createTeam:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// Get all teams
const getTeams = async (req, res) => {
  try {
    const teams = await TeamModel.find();
    res.status(200).json({ success: true, teams });
  } catch (error) {
    console.error("Error in getTeams:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

module.exports = { createTeam, getTeams };
