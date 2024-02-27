import "./Item.css"
import { NavLink, Link } from "react-router-dom"


const Item = ({nombreSatu, ImagPpal, precioLista, stock})=>{

    return(
        <article className="CardItem">
            <header className="Header">
                <h2>
                    {nombreSatu}
                </h2>
            </header>
            <picture>
                <img src={ImagPpal} alt={nombreSatu} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precioLista}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
                <footer className="ItemFooter">
                    <Link to={`/productos/${nombreSatu}`} className="Option">ver detalle</Link>
                </footer>
            </section>

        </article>
    )
}
export default Item