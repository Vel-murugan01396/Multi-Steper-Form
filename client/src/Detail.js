import { useState } from "react"



const Detail=({property,onClose})=>{
    const [valu,setValu]=useState(1);
    const [price,setPrice]=useState(property.price)

    const increaseValu=()=>{
        setValu(valu+1)
        setPrice(price+property.price)
    
    }
    const decreseValu=()=>{
        if (valu > 1) {  // Add this condition to prevent the value from going below 1
            setValu(valu - 1);
            setPrice(price - property.price);
          }
    }


    return(<>
    <div className="details">
<button onClick={onClose}>Close</button>
<img src={property.image} className="d-image"/>
<h2 className="d-heading">{property.title}</h2>
<p className="d-para">{price}</p>
<div className="hbut">

<button onClick={decreseValu} className="v-but">-</button>
<p>{valu}</p>
<button onClick={increaseValu}className="v-but">+</button>
</div>


    </div>
    
    </>)

}

export default Detail;