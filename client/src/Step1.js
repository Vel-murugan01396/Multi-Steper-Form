import React, { useEffect, useState } from "react";

export function Step1({formData,handleChange,nextStep}){
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        const allFieldsFilled = formData.name && formData.age && formData.email;
        setIsButtonEnabled(allFieldsFilled);
    }, [formData]);
    return(<>
<div>
<h1>Step 1</h1>
<form>

    <label>Name : </label>
    <div>
        <input type="text" name="name"  value={formData.name} onChange={handleChange}></input>
       
        </div>
       
    <br/>
    <label>
        Age :</label>
        <div>
        <input type="number" name="age" onChange={handleChange} value={formData.age}></input>
       
        </div> 
    <br/>
    <label>Email : </label>
    <div>
        <input type="text" name="email" onChange={handleChange} value={formData.email}></input>
        
        </div>
    <br/>
    <button onClick={nextStep} disabled={!isButtonEnabled}> Next</button>

    </form>

</div>

    
    
    </>)
}