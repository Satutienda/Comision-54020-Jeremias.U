import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext);

    // Calcular el total de la compra
    const total = cart.reduce((acc, item) => {
        return acc + (item.quantity * item.precioLista);
    }, 0);

    const handleClearCart = () => {
        clearCart();
    };

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No tienes nada en el carrito!!</h1>
                <Link to="/" className="Option">Productos</Link>
            </div>
        );
    }

    return (
        <div>
            {cart.map(producto => (
                <CartItem key={producto.nombreSatu} {...producto} />
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={handleClearCart} className="Button">Limpiar Carrito</button>
            <Link to="/checkout" className="Option">Finalizar compra</Link>
        </div>
    );
};

export default Cart;

