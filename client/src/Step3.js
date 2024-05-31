import { useEffect,useState } from "react"

export function Step3({formData,handleChange,prevStep,handleSubmit}){

    const[isButtonEnable,setIsButtonEnable]=useState(false)

    useEffect(()=>{
    const allFildFill=formData.level;
    setIsButtonEnable(allFildFill)
    },[formData])
    return(<>
<div>
<h1>Step 3</h1>
<form onSubmit={handleSubmit}>

    <label>level </label>
        <div>
        <input type="text" name="level" onChange={handleChange} value={formData.level}></input>
       
        </div>
    <br/>
    <button type="submit" disabled={!isButtonEnable}> Submit</button>
    
    <br/>
   
    <button onClick={prevStep} > previous</button>

    </form>

</div>

    
    
    </>)
}