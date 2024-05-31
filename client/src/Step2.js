import { useState,useEffect } from "react"
export function Step2({formData,handleChange,nextStep,prevStep}){

    const[isButtonEnable,setIsButtonEnable]=useState(false);

    useEffect(()=>{
   const allFilesFilled=formData.mobile && formData.work && formData.status;
   setIsButtonEnable(allFilesFilled)

    },[formData])
    return(<>
<div>
<h1>Step 2</h1>
<form>
    <label>Mobile </label>
    <div>
    <input type="number" name="mobile" onChange={handleChange} value={formData.mobile}></input>
    
    </div>
    <br/>
    <label>Work </label> 
    <div>
    <select name="work" onChange={handleChange} value={formData.work}>
        <option value="workhome">work from home</option>
        <option value="office">office</option>
        <option value="freetime">freeTime</option>
        </select>
       
        </div>
    <br/>
    <label>Status</label> 
    <div>
    <input type="radio" name="status" value="married" checked={formData.status ==="married"} onChange={handleChange} />Married 
    <input type="radio" name="status" value="unmarried" onChange={handleChange} checked={formData.status==="unmarried"}/> Unmarried
    
    </div>
    <br/>
    <button onClick={nextStep} disabled={!isButtonEnable}> Next</button>
    <br/>
    <button onClick={prevStep}> previous</button>

    </form>

</div>

    
    
    </>)
}