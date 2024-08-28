const express= require('express');

const router=express.Router();

const {
   countByCity,
   countByType,
   createHotel,
   deleteHotel,
   getHotel,
   getHotelRooms,
   getHotels,
   updateHotel,
 } =require( "../controllers/hotel.js");
 const Hotel =require("../models/Hotel.js");
 const {verifyAdmin} =require( "../utils/verifyToken.js");
 
 //CREATE
 router.post("/", verifyAdmin, createHotel);
 
 //UPDATE
 router.put("/:id", verifyAdmin, updateHotel);

 //DELETE
 router.delete("/:id", verifyAdmin, deleteHotel);

 //GET
 router.get("/find/:id", getHotel);
 
 //GET ALL
 
 router.get("/", getHotels);
 router.get("/countByCity", countByCity);
 router.get("/countByType", countByType);
 router.get("/room/:id", getHotelRooms);
 

module.exports=router 