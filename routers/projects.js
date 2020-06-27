const express = require("express");
const Projects = require("../models/projects-model");

const router = express.Router();


router.get("/projects", async (req, res, next) => {
  try {
    const project = await Projects.find();
    res.json(project);
  } catch (err) {
    next(err);
  }
});

router.get("/projects/:id", async (req, res, next) => {
  try {
    const project = await Projects.findById(req.param.id);
    if (!project) {
      res.status(404).json({
        message: "Project not found",
      });
    }
    res.json(project);
  } catch (err) {
    next(err);
  }
});




module.exports = router