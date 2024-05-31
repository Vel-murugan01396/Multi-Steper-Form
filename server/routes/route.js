const express =require("express");
const { PostForm, GetForm } = require("../controllers/FormControl");


const router=express.Router();


router.post("/",PostForm);
router.get("/",GetForm);








module.exports=router;