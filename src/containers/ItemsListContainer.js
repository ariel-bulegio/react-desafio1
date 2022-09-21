import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import list from "../utils/dataList";
const ItemsListContainer = () =>{

    const[data,setData] = useState([]);

    
    useEffect(()=> {
      list()
        .then((response)=> setData(response))
        .catch((err)=> console.error(err))
        .finally()
    },[])
    
    return(
        <>
        <h1>
            Desafio
        </h1>
        <ItemList lists={data} />
        
        </>
    )
}

export default ItemsListContainer;