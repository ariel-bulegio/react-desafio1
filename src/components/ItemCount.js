import { useState } from "react";

const ItemCount = ({handleComprar})=>{
    
const [cant, setCant] = useState(0);
const handleMas =()=>{
    if (cant < 10){
setCant (cant + 1);
}else{
    alert("Solo disponemos de 10 unidades")
}

}

const handleMenos =()=>{
    if (cant >= 2){
setCant (cant - 1);

    }else{
        alert("Pedido no valido, ingrese numeros positivos")
}

}
    return(
        <div >
        
        <div className="btns">
        <div className="butMasMenos ">
        <button className="btm butMasMenos" onClick={handleMenos} >-</button>{cant}
        <button className="btm butMasMenos" onClick={handleMas}>+</button>
        </div>
        <button className="butComp" onClick={()=> handleComprar()}> COMPRAR</button>
        </div>
        

        
        
        </div>
    )
}

export default ItemCount;