import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import customFetch from "../utils/customFetch";
import dataBase from "../utils/dataList";

const ItemDetailContainer =() =>{
    const[data, setData] = useState({});
    const{ id } = useParams();

    
    useEffect(()=> {
      customFetch(2000, dataBase.find(list => list.id == id))
        .then(result => setData(result))
        .catch(err => console.log(err))

    },[id]);
    
    return(
        <>
<ItemDetail list={data}/>
</>
    )
}






export default ItemDetailContainer;