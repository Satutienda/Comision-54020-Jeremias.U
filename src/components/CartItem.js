import React from "react";

const CartItem = ({ nombreSatu, quantity, precioLista}) => {
    return (
        <div>
            <p>{nombreSatu}</p>
            <p>Cantidad: {quantity}</p>
            <p>Precio: ${precioLista}</p>
        </div>
    );
};

export default CartItem;
