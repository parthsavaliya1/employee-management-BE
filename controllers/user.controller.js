const express = require("express");
const { createUser, findAllUsers, deleteUser, updateUser } = require("../services/users.service");
const router = express.Router();


router.post("/create", async (req, res) => {
  const user = req.body;
  createUser(user).then(resp => {
    res.status(200).json(resp);
  }).catch( (error)=> res.status(400).json(error))
});

router.get("/get-all", async (req, res) => {
  findAllUsers().then(resp => {
    res.status(200).json(resp);
  }).catch( (error)=> {
    res.status(400).json(error)
  } )
});

router.delete("/delete/:id", async (req, res) => {
  const {id} = req.params;
  deleteUser(id).then( ()=> {
    res.status(200).json({message:'user deleted successfully'});
  }).catch( (error)=> res.status(400).json(error))
});

router.put("/update/:id", async (req, res) => {
  const {id} = req.params;
  const user = req.body;
  updateUser(user,id).then(resp => {
    res.status(200).json(user);
  }).catch( (error)=> res.status(400).json(error))
});

module.exports = router;
