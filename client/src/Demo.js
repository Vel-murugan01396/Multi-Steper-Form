import React, { useState } from "react";


export default function Demo(){
    const[count,setCount]=useState({name:"",age:"",email:""})
    const [mapping,setMapping]=useState([])

    // useEffect(()=>{
    //     console.log("grdhf")
    // },[count])



    function handleChange(e){
        const {name,value}=e.target
        setCount({...count,[name]:value})
    }

    function handleClick(){
    //    e.preventDefult()
       console.log(count)
       setMapping([...mapping,count])
    }

    
    return(<>

<form>

<label>Name : </label>
<div>
    <input type="text" name="name"  value={count.name} onChange={handleChange}></input>
   
    </div>
   
<br/>
<label>
    Age :</label>
    <div>
    <input type="number" name="age" onChange={handleChange} value={count.age}></input>
   
    </div> 
<br/>
<label>Email : </label>
<div>
    <input type="text" name="email" onChange={handleChange} value={count.email}></input>
    
    </div>


</form>
    <button onClick={handleClick}>read</button>

    <div>
    {mapping.map((data, index) => (
                <tr key={index}>
                  <h1>{data.name}</h1>
                  <h1>{data.age}</h1>
                  <h1>{data.email}</h1>
                  <h1>{data.mobile}</h1>
                  <h1>{data.work}</h1>
                  <h1>{data.status}</h1>
                  <h1>{data.level}</h1>
                </tr>
              ))}

    </div>
    </>)
}


