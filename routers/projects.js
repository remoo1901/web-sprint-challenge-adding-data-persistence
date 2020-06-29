const express = require("express");
const Projects = require("../models/projects-model");

const router = express.Router();

//=============================
// GET PROJECTS
//=============================

router.get("/projects", async (req, res, next) => {
  try {
    const project = await Projects.find();
    res.json(project);
  } catch (err) {
    next(err);
  }
});

//=============================
// GET PROJECT BY ID
//=============================

router.get("/projects/:id", async (req, res, next) => {
  try {
    const project = await Projects.findById(req.params.id);
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

//=============================
// ADD PROJECT
//=============================

router.post("/projects", async (req, res, next) => {
  try {
    const project = await Projects.addProject(req.body);
    if (!project) {
      res.status(400).json({
        Message: "Error adding new project",
      });
    }
    res.json(project);
  } catch (err) {
    next(err);
  }
});

//=============================
// UPDATE PROJECT
//=============================

router.put("/projects/:id", async (req, res, next) => {
  try {
    const project = await Projects.updateProject(req.body, req.params.id);

    if (!project) {
      res.status(404).json({
        Message: "Project not found",
      });
    }
    res.json(project);
  } catch (err) {
    next(err);
  }
});

//=============================
// DELETE PROJECT
//=============================

router.delete("/projects/:id", async (req, res, next) => {
  try {
    const del = await Projects.deleteProject(req.params.id);
    if (del) {
      res.json({ Deleted: del });
    } else {
      res.status(404).json({ message: "Could not find scheme with given id" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;

/* router.delete("/projects/:id", (req, res) => {
  Projects.deleteProject(req.params.id)
  .then(del => {
    if (del){
      res.json({ Deleted: del})
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete scheme' });
  })

  
})
 */
