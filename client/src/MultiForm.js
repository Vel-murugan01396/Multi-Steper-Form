import React,{useState} from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import Swal from "sweetalert2"

export default function MultiForm(){

    const [currentStep,setCurrentStep]=useState(1)

    const[formData,setFormData]=useState({
        name:"",
        age:"",
        email:"",
        mobile:"",
        work:"",
        status:"",
        level:""
    })
   

    function handleChange(e){
        const { name, value}=e.target;
        setFormData({...formData,[name]:value});
       
    };


    const resetForm = () => {
        setFormData({
          name: "",
          age: "",
          email: "",
          mobile: "",
          work: "",
          status: "",
          level: ""
        });
        setCurrentStep(1);
      };


    const handleSubmit=async(e)=>{
        e.preventDefault();
       
        try {
            const respones=await fetch("http://localhost:3003/form",{
                method:"POST",
                headers:{"Content-Type":"Application/Json"},
                body:JSON.stringify(formData),

            });
            if (respones.ok){
                const responesData=await respones.json();
                console.log(responesData)
                Swal.fire({
                    icon: 'success',
                    title: 'filled Successfully!',
                    showConfirmButton: false,
                    timer: 500,
                  });
                  resetForm();
            }else {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                });
            }
        } catch (error) {
            console.log("error",error)
        }
    }

   

   

     function nextStep(){
        setCurrentStep(currentStep + 1)
    }
    function prevStep(){
        setCurrentStep(currentStep - 1)
    }
    return(<>

    <div>

        {currentStep ===1 &&<Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />}
        {currentStep ===2 && <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
        {currentStep ===3 && <Step3 formData={formData} handleSubmit={handleSubmit} prevStep={prevStep} handleChange={handleChange} />}
    </div>
    
    </>)
}