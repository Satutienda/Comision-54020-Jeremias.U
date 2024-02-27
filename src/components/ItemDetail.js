import ItemCount from "./ItemCount";
import "./Item.css"

const ItemDetail = ({nombreSatu, grupo, vestimentaPara,familia, ImagPpal, precioLista, stock }) => {

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
        <p className="Info">
            Grupo Articulos: {grupo}
        </p>
        <p className="Info">
            Iaeal para: {vestimentaPara}
        </p>
        <p className="Info">
            Familia de Articulos: {familia}
        </p>
    </section>
    <footer className="ItemFooter">
    <ItemCount initial={1}stock={stock} onAdd={(quantity)=> console.log(`cantidad agregada`, {quantity})} /> 
    </footer>
</article>
    )

}

export default ItemDetail;