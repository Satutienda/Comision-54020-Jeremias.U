import NavBarSatu from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemCount from "./components/ItemCount.js";

let nombre="jeremias"

function App() {
    return (
        <div>
            <NavBarSatu/>
            <ItemListContainer saludos={"Hola Visitante!!"}/>
            <ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log (`Cantidad agragada`, quantity)} />         
        </div>
        



    )
    
}

export default App