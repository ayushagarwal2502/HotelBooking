const mongoose=require('mongoose');

const url='mongodb+srv://ayushagarwal2502:gEsDKqFTgtWEczMG@cluster0.dseaese.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

module.exports.connect=()=>{
    mongoose.connect(url,{
      
    }).then(()=>{ 
        console.log("mongo db connected succesfully");
    }).catch((error)=>{
        console.log(error); 
    })  
} 