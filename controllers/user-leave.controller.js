const express = require("express");
const { findAllLeave, createLeave, deleteLeave, updateLeave, findLeaveByUserId } = require("../services/users-leaves.service");
const router = express.Router();


router.post("/create", async (req, res) => {
  const leave = req.body;
  createLeave(leave).then(resp => {
    res.status(200).json(resp);
  }).catch( (error)=> res.status(400).json(error))
});

router.get("/get-all", async (req, res) => {
    findAllLeave().then(resp => {
    res.status(200).json(resp);
  }).catch( (error)=> {
    res.status(400).json(error)
  })
});

router.get("/:id", async (req, res) => {
    const {id} = req.params;
    findLeaveByUserId(id).then(resp => {
    res.status(200).json(resp);
  }).catch( (error)=> {
    res.status(400).json(error)
  })
});

router.delete("/delete/:id", async (req, res) => {
  const {id} = req.params;
  deleteLeave(id).then( ()=> {
    res.status(200).json({message:'user deleted successfully'});
  }).catch( (error)=> res.status(400).json(error))
});

router.put("/update/:id", async (req, res) => {
  const {id} = req.params;
  const leave = req.body;
  updateLeave(leave,id).then(resp => {
    res.status(200).json(leave);
  }).catch( (error)=> res.status(400).json(error))
});

module.exports = router;
