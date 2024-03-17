import NavBarSatu from "./components/NavBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer.js"
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import { CartProvider } from "./components/context/CartContext.js";
import Cart from "./components/Cart.js";





function App() {
    return (
        <div ClasName="App">
            <BrowserRouter>
                <CartProvider>
                    <NavBarSatu />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/grupo/:grupo" element={<ItemListContainer />} />
                        <Route path="/productos/:id" element={<ItemDetailContainer />} />
                        <Route path="/carrito" element={<Cart/>}/>
                        <Route path="*" element={<h1>404 Not found</h1>} />
                    </Routes>

                </CartProvider>

            </BrowserRouter>
        </div>
    );
}

export default App