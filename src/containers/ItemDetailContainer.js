import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import customFetch from "../utils/customFetch";
import dataBase from "../utils/dataList";

const ItemDetailContainer =() =>{
    const[data, setData] = useState({});

    
    useEffect(()=> {
      customFetch(2000, dataBase[2])
        .then(result => setData(result))
        .catch(err => console.log(err))

    },[]);
    
    return(
        <>
<ItemDetail list={data}/>
</>
    )
}






export default ItemDetailContainer;