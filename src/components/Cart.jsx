import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
   const {cartList,clear} = useContext(CartContext);


    return (
        <>
        <h1>Bienvenido a tu carrito de compra</h1>

        {
           cartList.map(item => <li>{item.title}</li>)
        }
        <button onClick={clear}>Eliminar carrito</button>
        </>
    )
}
export default Cart ;