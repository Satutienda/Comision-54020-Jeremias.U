import Item from "./Item"
import "./ItemList.css"

const ItemList = ({ products }) => {

    const uniqueImgPals = new Set();


    products.forEach((prod) => {
        uniqueImgPals.add(prod.ImagPpal);
    });


    const uniqueProducts = Array.from(uniqueImgPals).map((ImagPpal) =>
        products.find((prod) => prod.ImagPpal === ImagPpal)
    );

    return (
        <div className="ListGroup">
            
            {uniqueProducts.map((prod) => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
};
export default ItemList