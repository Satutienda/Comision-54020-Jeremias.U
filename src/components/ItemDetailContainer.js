import { useState, useEffect } from "react"
import { getProductByName } from "../AsincMock"
import ItemDetail from './ItemDetail'
import {useParams} from "react-router-dom"


const ItemDetailContainer = ()=>{
    const [product, setProduct]= useState(null)
    const {nombreSatu} = useParams()
 
    useEffect(()=>{
        getProductByName(nombreSatu)

        .then(response => {
            setProduct(response)
        })
        .catch(error =>{
            console.error(error)
        },[nombreSatu])

        
    },[])


    return(
        <div>
            
            <ItemDetail {...product}/>
        </div>
        
    )
}

export default ItemDetailContainer