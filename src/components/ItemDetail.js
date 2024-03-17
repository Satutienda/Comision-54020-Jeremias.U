import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import "./Item.css";

const ItemDetail = ({ id, nombreSatu, grupo, paraClima, ImagPpal, precioLista, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id,
            nombreSatu,
            precioLista
        };
        addItem(item, quantity);
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2>{nombreSatu}</h2>
            </header>
            <picture>
                <img src={ImagPpal} alt={nombreSatu} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Precio: ${precioLista}</p>
                <p className="Info">Stock disponible: {stock}</p>
                <p className="Info">Grupo Articulos: {grupo}</p>
                <p className="Info">Ideal para: {paraClima}</p>
            </section>
            <footer className="ItemFooter">
                {quantityAdded > 0 ? (
                    <Link to="/cart" className="Option">
                        Terminar Compra
                    </Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
            </footer>
        </article>
    );
};

export default ItemDetail;
