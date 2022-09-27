import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
const ItemDetail = ({list}) =>{
    const [itemCount, setItemCount] = useState(1);
    const {addItem} = useContext(CartContext);
 const handleComprar = (cantidad)=>{
        alert("anadido al carrito");
        setItemCount(cantidad);
        addItem(list, cantidad);
    }
    return(

<>
<div className="container">
    <img className="imagen imag" src={list.image} alt
    ="hola"/>
    <h2 className="titulo"> {list.title}</h2>
    <p className="descripcion">{list.description}</p> 
    <div className="grey">
    <p>{list.material}</p>
    <p> {list.color}</p>
    <p> {list.stock}</p>

    {
        itemCount === 1
      ? <ItemCount className="boton" initial={itemCount} handleComprar={handleComprar}/>
      : <Link to="/cart"><button className="btn butComp">Ver carrito</button></Link>

    }
    </div>
</div>

</>

    )
}


export default ItemDetail;