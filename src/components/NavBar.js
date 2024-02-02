import CardWidgetSatu from "./CardWidget";


function NavBarSatu() {


    return (
        <div>
            <nav style={{ backgroundColor: '#333', padding: '10px', alignItems: "center",display:"flex" }}>


            <div>
                    <img src="https://img.freepik.com/vector-premium/icono-navegador-degradado-retro-vectorial-icono-internet-diseno-plano_616756-966.jpg" alt="Descripción de la imagen" style={{ marginRight: '10px', width: 50 , height: 50 }} />
                </div>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0, textAlign: 'center' }}>
                    <li style={{ display: 'inline', marginRight: '10px' }}>
                        <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '5px 10px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Todos los productos</a>
                    </li>
                    <li style={{ display: 'inline', marginRight: '10px' }}>
                        <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '5px 10px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Camisetas</a>
                    </li>
                    <li style={{ display: 'inline', marginRight: '10px' }}>
                        <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '5px 10px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Celulares</a>
                    </li>
                    <li style={{ display: 'inline', marginRight: '10px' }}>
                        <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '5px 10px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Calzado</a>
                    </li>
                </ul>
                <CardWidgetSatu/>




            </nav>
        </div>
    )
}

export default NavBarSatu;