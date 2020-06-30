const express = require("express");
const Rs = require("../models/resources-model");
const { Router } = require("express");

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

//=============================
// ADD RESOURCE
//=============================

router.post("/resources", async (req, res, next) => {
  try {
    const rsc = await Rs.addResource(req.body);
    if (!rsc) {
      res.status(400).json({
        Message: "Error adding new resource",
      });
    }
    res.json(rsc);
  } catch (err) {
    next(err);
  }
});

//=============================
// UPDATE RESOURCE
//=============================

router.put("/resources/:id", async (req, res, next) => {
  try {
    const rs = await Rs.updateResource(req.body, req.params.id);
    if (!rs) {
      res.status(404).json({
        Message: "Resource not found",
      });
    }
    res.json(rs);
  } catch (err) {
    next(err);
  }
});

//=============================
// DELETE RESOURCE
//=============================

router.delete("/resources/:id", async (req, res, next) => {
  try{
      const del = await Rs.deleteResource(req.params.id)
      if (del){
        res.json({Deleted: del })
      } else{
        res.status(404).json({
          message: `Could not find resource with ID # ${req.params.id}`
        })
      }
  }catch(err){
    next(err)
  }
})


module.exports = router;
