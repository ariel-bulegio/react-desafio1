import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

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
  <Link to={"/detalle/" + list.id}><p className="detalles">Mas detalles</p></Link>
  <ItemCount handleComprar={handleComprar}/>
</div>


</>

    )
}
export default Item;