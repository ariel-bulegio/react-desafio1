import ItemCount from "./ItemCount";

const ItemDetail = ({list}) =>{


    return(

<>
<div className="container">
    <img className="imagen" src={list.image}/>
    <h2 className="titulo"> {list.title}</h2>
    <p className="descripcion">{list.description}</p> 
    <div className="grey">
    <p>{list.material}</p>
    <p>color: {list.color}</p>
    <p>{list.stock}</p>
    <ItemCount className="boton"/>
    </div>
</div>
</>

    )
}


export default ItemDetail;