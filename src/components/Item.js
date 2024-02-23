import "./Item.css"


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
                    <button className="Option">ver detalle</button>
                </footer>
            </section>

        </article>
    )
}
export default Item