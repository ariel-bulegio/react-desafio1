import ItemCount from "./ItemCount";

const ItemsListContainer = () =>{
    const handleComprar = ()=>{
        alert("anadido al carrito")
    }
    return(
        <>
        <h1>
            Desafio
        </h1>
        <ItemCount handleComprar={handleComprar}/>
        </>
    )
}

export default ItemsListContainer;