function CardWidgetSatu() {

let QtyItemCard=8

    return (
        <div style={{ display: "flex", alignItems: "center"}}>
            

                <div style={{ marginRight: '10px', width: 50 , height: 50 , position: "absolute"}} >
                    <img src="https://img.freepik.com/vector-premium/icono-carrito-compras-vectorial-etiqueta-engomada-papel-sombra-simbolo-compras-coloreado-aislado_118339-1774.jpg?w=360" alt="Descripción de la imagen" style={{ marginRight: '10px', width: 50 , height: 50 }} />

                    

                </div>
                <div>
                <p style={{ marginRight: '10px', width: 50 , height: 50 , position: "relative"}} >{QtyItemCard}</p>
                </div>
                
                
                
                
           
        </div>
    )
}

export default CardWidgetSatu;