const express = require("express");
const Tasks = require("../models/tasks-model");

const router = express.Router();


//=============================
// GET TASKS
//=============================

router.get("/tasks", async (req, res, next) => {
  try {
    const task = await Tasks.find();
    res.json(task);
  } catch (err) {
    next(err);
  }
});

//=============================
// GET TASK BY ID
//=============================

router.get("/tasks/:id", async (req, res, next) => {
  try {
    const task = await Tasks.findById(req.param.id);
    if (!task) {
      res.status(404).json({
        message: "Task not found",
      });
    }
    res.json(task);
  } catch (err) {
    next(err);
  }
});

//=============================
// ADD TASK
//=============================

router.post("/tasks", async (req, res, next) => {
  try {
    const task = await Tasks.addTask(req.body);
    if (!task) {
      res.status(400).json({
        Message: "Error adding new task",
      });
    }
    res.json(task);
  } catch (err) {
    next(err);
  }
});

//=============================
// UPDATE PROJECT
//=============================

router.put("/tasks/:id", async (req, res, next) => {
  try {
    const task = await Tasks.updateTask(req.body, req.params.id);

    if (!task) {
      res.status(404).json({
        Message: "Task not found",
      });
    }
    res.json(task);
  } catch (err) {
    next(err);
  }
});

//=============================
// DELETE PROJECT
//=============================

router.delete("/tasks/:id", async (req, res, next) => {
  try {
    const del = await Tasks.deleteTask(req.params.id);
    if (del) {
      res.json({ Deleted: del });
    } else {
      res.status(404).json({ message: `Could not find Task with id # ${req.params.id}` });
    }
  } catch (err) {
    next(err);
  }
});




module.exports = router