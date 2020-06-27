const express = require("express");
const Tasks = require("../models/tasks-model");

const router = express.Router();


router.get("/tasks", async (req, res, next) => {
  try {
    const task = await Tasks.find();
    res.json(task);
  } catch (err) {
    next(err);
  }
});

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




module.exports = router