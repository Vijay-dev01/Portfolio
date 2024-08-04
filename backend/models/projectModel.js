const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the project name"],
    trim: true,
    maxLength: [100, "Project name connot exceed 100 characters"],
  },
  title: {
    type: String,
    required: [true, "Please enter the project title"],
    trim: true,
    maxLength: [200, "Project title connot exceed 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Please enter the project description"],
  },
  siteLink: {
    type: String,
  },
  githubLink: {
    type: String,
    required: [true, "Please enter the project github Link"],
  },
  skills: [
    {
      skill: {
        type: String,
        required: [
          true,
          "Please enter the which are the programming languages used to build",
        ],
      },
    },
  ],
  images: [
    {
      image: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

let schema = mongoose.model("project", projectSchema);

module.exports = schema;
