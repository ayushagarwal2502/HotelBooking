const mongoose =require('mongoose');


const HotelSchema=new mongoose.Schema({

name:{
    type:String,
    required:true
},
 
 type:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
 city:{
    type:String,
    required:true
},
distance:{
    type:String,
    required:true
},
Photos:{
    type:[String]
    
},

desc:{
    type:String,
    required:true
},
rating:{
    type:String,
    min:0,
    max:5
},
 rooms:{
    type:[String],
    
},
 cheapestPrice:{
    type:Number,
    
},
featured:{
    type:String,
    required:true
},
})

module.exports=mongoose.model("Hotels",HotelSchema) ;