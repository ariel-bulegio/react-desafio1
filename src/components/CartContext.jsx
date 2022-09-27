import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addItem = (dataBase, cantidad)=> {
        setCartList([...cartList, dataBase])
    }

    const clear =()=> {
        setCartList([])
    }

    
  
    return(

        <CartContext.Provider value={{cartList,addItem, clear, }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;