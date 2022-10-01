import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";

const Cart = () => {
   const {cartList,clear} = useContext(CartContext);


   return (
    <>
        {cartList.length !== 0
            ? <OrderSummary />
            : <div></div>
        }
        <div className="d-flex justify-content-center">
            <h3 className="p-3">
                Carrito de compras
            </h3>
        </div>
        <div className="container-fluid d-flex justify-content-start">
            {
                cartList.length !== 0
                    ? cartList.map(list => <div key={list.id}>
                        <img src={list.image}  alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{list.title} </h5>
                            <p className="card-text">{list.cantSelec} item(s)</p>
                            
                            <p className="card-text">Precio total: ${list.precio * list.cantSelec}</p>
                            <button onClick={() => clear(list.id)} className="btn btn-dark m-3">Remover Producto</button>
                        </div>
                    </div>)
                    : <div className="container mt-5 d-flex justify-content-center">
                        <h5>No hay productos en el carrito. Encontra lo que buscas desde el <Link to="/">HOME</Link></h5>
                    </div>
            }
        </div>

    </>
)
}
export default Cart;