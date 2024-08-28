const express=require('express');
const port =8000;
const app=express();
const cors=require('cors');
const db=require('./db.js');
const authRoute=require('./routes/auth.js');
const hotelsRoute=require('./routes/hotels.js');
const roomsRoute=require('./routes/rooms.js');
const usersRoute=require('./routes/users.js');
const cookieParser = require('cookie-parser');
const dotenv =require('dotenv');

db.connect();
dotenv.config(); 



app.get('/',(req,res)=>{
    res.send("jgcjdwgcjdy")
})

//middlewares  
app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use('/api/auth',authRoute);
app.use('/api/hotels',hotelsRoute);
app.use('/api/rooms',roomsRoute);
app.use('/api/users',usersRoute);


app.listen(port,()=>{


console.log('listening on port ')


})
