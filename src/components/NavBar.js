import CardWidgetSatu from "./CardWidget"
import { NavLink, Link } from "react-router-dom"



const NavBarSatu = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#03071e', color: 'white' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#bfbaff' }}>
                <h3>SatuTienda</h3>
            </Link>
            <div style={{ display: 'flex' }}>
                <NavLink to={"/grupo/Vestimenta"} activeclassname="ActiveOption" style={{ textDecoration: 'none', color: 'white', padding: '0 10px' }}>Vestimenta</NavLink>
                <NavLink to={"/grupo/Tecnologia"} activeclassname="ActiveOption" style={{ textDecoration: 'none', color: 'white', padding: '0 10px' }}>Tecnologia</NavLink>
                <NavLink to={"/grupo/Home"} activeclassname="ActiveOption" style={{ textDecoration: 'none', color: 'white', padding: '0 10px' }}>Home</NavLink>
            </div>
            <CardWidgetSatu />
        </nav>
    );
}

export default NavBarSatu;