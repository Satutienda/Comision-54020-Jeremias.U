import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    const { cart, clearCart, totalQuantity, removeItem } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Calcula el total cada vez que el carrito cambie
        const newTotal = cart.reduce((acc, item) => {
            return acc + (item.quantity * item.precioLista);
        }, 0);
        setTotal(newTotal);
    }, [cart]);

    const handleClearCart = () => {
        clearCart();
    };

    const handleDeleteItem = (id) => {
        removeItem(id);
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
                <CartItem key={producto.id} {...producto} onDelete={handleDeleteItem} />
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={handleClearCart} className="Button">Limpiar Carrito</button>
            <Link to="/checkout" className="Option">Finalizar compra</Link>
        </div>
    );
};

export default Cart;



