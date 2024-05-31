const FormModel=require("../models/Form");


const PostForm= async(req,res)=>{
    try {
        const{name,age,email,mobile,work,status,level}=req.body

        const FormProcess=new FormModel({
            name,age,email,mobile,work,status,level
        })
        const FormSaved=await FormProcess.save()
        res.status(201).json(FormSaved);
        
    } catch (error) {
        res.status(501).json({error:"internal server error"});
        
    }
}

const GetForm=async(req,res)=>{
    try {
        const GetForm=await FormModel.find()
        res.status(201).json(GetForm)
        
    } catch (error) {
        res.status(501).json({error:"internal error"})
        
    }
}





module.exports={PostForm,GetForm}