import React from "react";
import ItemCount from "./ItemCount";

const Item = ({list})=> {

  const handleComprar = ()=>{
    alert("anadido al carrito")
}


    return(
<>
<div className="cards" >
<img className="imag" src={list.image}    />
  <div className="card-body">
  
    <h5 className="card-title">{list.title}</h5>
    <p className="card-text">{list.description}</p>
    
    
  </div>
  <button className="detalles">Mas detalles</button>
  <ItemCount handleComprar={handleComprar}/>
</div>


</>

    )
}
export default Item;