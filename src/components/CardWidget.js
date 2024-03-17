import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";




const CardWidgetSatu = () => {

    const { quantity } = useContext(CartContext)

    return (
        <Link to="/carrito" className="CartWidget" >
            <img className="CartImg" src="../../public/logo192.png" alt="Carrito"/>
            {quantity}

        </Link>
    )
}

export default CardWidgetSatu;


//style= {{ display: totalQuantity > 0 ? "block" : "none"}}