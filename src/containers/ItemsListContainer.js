import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import customFetch from "../utils/customFetch";
import dataBase from "../utils/dataList";
import { useParams } from "react-router-dom";
const ItemsListContainer = () =>{

    const[data,setData] = useState([]);
    const{ id } = useParams();

    useEffect(()=> {

        if(id){
            customFetch(2000, dataBase.filter(list => list.categoryId === id))
            .then(result => setData(result))
            .catch(err => console.log(err))

        }else{


           customFetch(2000, dataBase)
           .then(result => setData(result))
           .catch(err => console.log(err))
  }
      },[id]);


    // useEffect(()=> {
    //   list()
    //     .then((response)=> setData(response))
    //     .catch((err)=> console.error(err))
    //     .finally()
    // },[])
    
    return(
        <>
        
        <ItemList lists={data} />
        
        </>
    )
}

export default ItemsListContainer;