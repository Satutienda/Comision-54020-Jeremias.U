import { useState, useEffect } from "react"
import { getProducts, getProductsByGrupo } from "../AsincMock" 
import ItemList from "./ItemList"
import {useParams} from "react-router-dom"



const   ItemListContainer = ({saludos})=>{
    const[products, setProducts]=useState([])
    const {grupo} = useParams ()
    
    useEffect(()=>{

        const asyncFunc = grupo ? getProductsByGrupo : getProducts

        asyncFunc(grupo) 
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    },[grupo])


    return(
        <div>
            <h1>{saludos}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer