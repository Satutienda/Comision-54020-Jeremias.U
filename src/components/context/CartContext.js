import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.nombreSatu)) {
            setCart(prev => [...prev, { ...item, quantity }])
        }
        else {
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (nombreSatu) => {
        const carUpdate = cart.filter(prod => prod.nombreSatu !== nombreSatu)
        setCart(carUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (nombreSatu) => {
        return cart.some(prod => prod.nombreSatu === nombreSatu)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>

    )
}