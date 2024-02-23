import { useState, useEffect } from "react"
import { getProducts } from "../AsincMock" 
import ItemList from "./ItemList"



const   ItemListContainer = ({saludos})=>{
    const[products, setProducts]=useState([])
    
    useEffect(()=>{
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    },[])


    return(
        <div>
            <h1>{saludos}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer