const projects = require("../data/projects.json");
const Project = require("../models/projectModel");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

const seedProjects = async () => {
  try {
    await Project.deleteMany();
    console.log("projects deleted");
    await Project.insertMany(projects);
    console.log("All Projects added!");
  } catch (err) {
    console.log(err.message);
  }
  process.exit();
};

seedProjects();
