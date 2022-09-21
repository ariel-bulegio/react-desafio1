import Item from "./Item";

const ItemList =({lists})=>{

    return(
        <div className="conte">
        {lists.map( (list) => 
        <Item 
        key={list.id}
        list = {list}

        
         />
        
        )}
        </div>
    )
}
export default ItemList;