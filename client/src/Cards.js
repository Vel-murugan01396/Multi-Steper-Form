const Cards=({title,price,image})=>{
    return(<>
    <div className="card">
        <img src={image} alt={title} className="c-image"/>
        <h2 className="c-heading">{title}</h2>
        <p className="c-para">{price}</p>
    </div>
    
    </>
);
};
export default Cards;