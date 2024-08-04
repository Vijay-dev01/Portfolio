const express = require("express");
const {
  getProject,
  newProject,
  getSingleProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const router = express.Router();
const multer = require('multer');
const path = require('path')
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/authenticate");

const upload = multer({storage: multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, path.join( __dirname,'..' , 'uploads/projects' ) )
  },
  filename: function(req, file, cb ) {
      cb(null, file.originalname)
  }
}) })

router.route("/projects").get(getProject);
router
.route("/project/:id")
.get(getSingleProject)
.put(updateProject)
.delete(deleteProject);

//admin routes
router.route("/admin/project/new").post(upload.array('images'), newProject);
module.exports = router;
