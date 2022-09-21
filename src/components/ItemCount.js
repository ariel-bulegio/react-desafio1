import { useState } from "react";

const ItemCount = ({handleComprar})=>{
const [cant, setCant] = useState(0);
const handleMas =()=>{
setCant (cant + 1);
}
const handleMenos =()=>{
setCant (cant - 1);
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