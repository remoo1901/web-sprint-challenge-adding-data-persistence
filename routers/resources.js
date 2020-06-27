const express = require("express");
const Rs = require("../models/resources-model");

const router = express.Router();


router.get("/resources", async (req, res, next) => {
  try {
    const rs = await Rs.find();
    res.json(rs);
  } catch (err) {
    next(err);
  }
});

router.get("/resources/:id", async (req, res, next) => {
  try {
    const rs = await Rs.findById(req.param.id);
    if (!rs) {
      res.status(404).json({
        message: "Resources not found",
      });
    }
    res.json(rs);
  } catch (err) {
    next(err);
  }
});




module.exports = router