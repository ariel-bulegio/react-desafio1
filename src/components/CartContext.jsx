import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addItem = (dataBase, cantidad)=> {
        if (!isInCart(dataBase.id)) {
            console.log(`Se agrego al carrito ${cantidad} productos`)
            dataBase.cantSelec = cantidad
            setCartList([
                ...cartList,
                dataBase
            ])
        } else {
            console.log(`Producto ya en carrito, se agrego ${cantidad} extra`)
            dataBase.cantSelec += cantidad
        }
    }

    const clear =()=> {
        setCartList([])
    }

   const isInCart = (id) => {
        if (cartList.find(list => list.id === id)) {
            return true
        } else {
            return false
        }
    }
     
      const calcularPrecioTotal = () => {
        let index = cartList.map(list => list.precio * list.cantSelec)
        return index.reduce((valorPrevio, valorActual) => valorPrevio + valorActual, 0)
    }

    const removeItem = (itemId) => setCartList(cartList.filter((list) => list.id !== itemId))
    const cantItems = () => {
        let index = cartList.map(list => list.cantSelec)
        return index.reduce((valorPrevio, valorActual) => valorPrevio + valorActual, 0)
    }
  
    return(

        <CartContext.Provider value={{cartList,addItem, clear, calcularPrecioTotal, removeItem, cantItems  }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;