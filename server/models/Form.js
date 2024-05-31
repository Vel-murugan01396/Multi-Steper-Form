const mongoose=require("mongoose");
const FormSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required: true 
            
        },
        age:{
            type:Number,
            min: 0, // Minimum age
            max: 120
           
        },
        email:{
            type:String,
            required: true,
            match: /.+\@.+\..+/
          
        },
        mobile:{
            type:Number,
            min: 1000000000, // Assuming mobile number should have at least 10 digits
            max: 9999999999
          
        },
        work:{
            type:String,
            required: true
        },
        status:{
            type:String,
           
            enum:["married","unmarried"],
            required: true

        },
       level:{
        type:String,
        required: true
        
       }

    }
)
const FormModel=mongoose.model("Form",FormSchema);
module.exports=FormModel;