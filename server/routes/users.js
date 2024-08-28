const express= require('express');

const router=express.Router();

const {
    updateUser,
    deleteUser,
    getUser,
    getUsers,
  } =require("../controllers/UserLogin.js");
  const { verifyAdmin, verifyUser } =require( "../utils/verifyToken.js");
//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

module.exports=router 