const express = require("express");
const { createTeam, getTeams } = require("../controllers/TeamController");

const teamRouter = express.Router();

// Route to create a new team
teamRouter.post("/create", createTeam);

// Route to get all teams
teamRouter.get("/list-team", getTeams);

module.exports = teamRouter;
