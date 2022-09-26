import ItemCount from "./ItemCount";

const ItemDetail = ({list}) =>{
    
 const handleComprar = ()=>{
        alert("anadido al carrito")
    }
    return(

<>
<div className="container">
    <img className="imagen imag" src={list.image} />
    <h2 className="titulo"> {list.title}</h2>
    <p className="descripcion">{list.description}</p> 
    <div className="grey">
    <p>{list.material}</p>
    <p> {list.color}</p>
    <p> {list.stock}</p>
    <ItemCount className="boton" handleComprar={handleComprar}/>
    </div>
</div>
</>

    )
}


export default ItemDetail;