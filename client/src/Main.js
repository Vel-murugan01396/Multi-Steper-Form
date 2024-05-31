import React, { useState } from "react";

import Property from "./Property";
import Cards from "./Cards";
import Detail from "./Detail";


const Main=()=>{

    const [selectedProperty,setSelectedProperty]=useState(false)


    const handImageClick=(property)=>{
        setSelectedProperty(property)
    }
    const handleClose=()=>{
        setSelectedProperty(false);
    }

    const PropertyCart=Property.map((data)=>{
        return(
            <div key={data.id} onClick={()=>handImageClick(data)}>
            <Cards
    key={data.id}
    title={data.title}
    image={data.image}
    price={data.price}/>
                 </div>
                 )
    })

    return(
        <div className="property-list">
{selectedProperty?(
    <Detail property={selectedProperty} onClose={handleClose}/>
):(PropertyCart)}

        </div>
    )
   
   
}

export default Main;