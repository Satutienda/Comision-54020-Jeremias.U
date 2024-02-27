import NavBarSatu from "./components/NavBar.js";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer.js"
import ItemDetailContainer from "./components/ItemDetailContainer.js";



function App() {
    return (
        <div ClasName="App">
            <BrowserRouter>
            <NavBarSatu/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/grupo/:grupo" element={<ItemListContainer/>}/>
                <Route path="/productos/:nombreSatu" element={<ItemDetailContainer/>}/>
                <Route path="*" element={<h1>404 Not found</h1>}/>
            </Routes>
            </BrowserRouter>  
        </div>
        



    );
    
}

export default App