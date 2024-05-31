const express = require('express');
const mongoose=require("mongoose");
const app = express();
const dontenv=require("dotenv");

const { PostForm, GetForm, } = require('./controllers/FormControl');

const cors=require("cors");





dontenv.config();
app.use(express.json());
app.use(cors());


// Start the server

app.post("/form",PostForm);
app.get("/form",GetForm);










const PORT = process.env.PORT || 8080;
mongoose.connect(process.env.MONGO_URL,{
   
})
.then(()=>{
    app.listen(PORT, () => 
        console.log(`server port ${PORT}`));
        console.log('db connected');   
})
.catch((error)=>{
    console.log(`${error} did not connect`);
})
