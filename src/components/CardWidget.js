import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./CardWidget.css"





const CardWidgetSatu = () => {
    const { quantity } = useContext(CartContext);

    return (
        <Link to="/carrito" className="CartWidget" >
            <FontAwesomeIcon icon={faShoppingCart} className="CartIcon" />
            {quantity}
        </Link>
    );
};

export default CardWidgetSatu;




//style= {{ display: totalQuantity > 0 ? "block" : "none"}}