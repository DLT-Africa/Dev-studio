const express = require("express");
const { 
  submitProject, 
  getProject, 
  getProjects, 
  deleteProject 
} = require("../controllers/projectController");

const router = express.Router();

router.post("/submit", submitProject);
router.get("/projects", getProjects);
router.get("/project/:id", getProject);
router.delete("/project/:id", deleteProject);

module.exports = router;
