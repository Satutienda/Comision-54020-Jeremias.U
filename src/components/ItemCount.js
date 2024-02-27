import {useState} from "react" 




const ItemCount = ({stock, initial, onAdd})=>{

    stock= 5
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {

        if(quantity < stock){
            setQuantity (quantity+1)
        }
    }

    const decrement =() => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="Contador">
            <div className="Control">
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Numero">{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={()=> onAdd(quantity)} disabled= {!stock}>
                    agragar al carrito
                </button>
            </div>
        </div>
    )

}

export default ItemCount