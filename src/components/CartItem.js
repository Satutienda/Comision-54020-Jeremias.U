import React from "react";
import "./CartItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ id, nombreSatu, quantity, precioLista, onDelete }) => {
    return (
        <div className="cart-item">
            <p className="nombreSatu">{nombreSatu}</p>
            <p className="quantity">Cantidad: {quantity}</p>
            <p className="precioLista">Precio: ${precioLista}</p>
            <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={() => onDelete(id)} />
        </div>
    );
};

export default CartItem;



