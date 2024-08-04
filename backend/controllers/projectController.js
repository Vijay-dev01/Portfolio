const Project = require("../models/projectModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const APIFeatures = require("../utils/apiFeatures");

//Get all Projects
exports.getProject = async (req, res, next) => {
  const resPerPage = 10;
  const apiFeatures = new APIFeatures(Project.find(), req.query)
    .search()
    .filter()
    .paginate(resPerPage);

  const project = await apiFeatures.query;
  res.status(200).json({
    success: true,
    count: project.length,
    project,
  });
};

//Add new Project
exports.newProject = catchAsyncError(async (req, res, next) => {
  let images = []
    let BASE_URL = process.env.BACKEND_URL;
    if(process.env.NODE_ENV === "production"){
        BASE_URL = `${req.protocol}://${req.get('host')}`
    }
    
    if(req.files.length > 0) {
        req.files.forEach( file => {
            let url = `${BASE_URL}/uploads/projects/${file.originalname}`;
            images.push({ image: url })
        })
    }

  req.body.images = images;
  //  req.body.user = req.user.id;
  const project = await Project.create(req.body);

  res.status(201).json({
    success: true,
    project,
  });
});

//Get one Project
exports.getSingleProject = catchAsyncError(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(new ErrorHandler("Project not Found", 400));
  }

  res.status(201).json({
    success: true,
    project,
  });
});

// Update Project

exports.updateProject = async (req, res, next) => {
  let project = await Project.findById(req.params.id);

  if (!project) {
    return next(new ErrorHandler("Project not Found", 400));
  }

  project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    project,
  });
};

//Delete Project

exports.deleteProject = async (req, res, next) => {
  let project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    return next(new ErrorHandler("Project not Found", 400));
  }

  // await project.remove();

  res.status(200).json({
    success: true,
    message: "Project Deleted",
  });
};
