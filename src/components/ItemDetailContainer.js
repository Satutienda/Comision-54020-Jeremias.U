import { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../src/services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const docRef = doc(db, "products", id);

        getDoc(docRef)
    .then(response => {
        const data = response.data();
        if (data) {
            
            const productAdapted = {
                id: response.id,
                ...data
            };
            setProduct(productAdapted);
        } else {
            console.error("El documento no existe o está vacío");
        }
    })
    .catch(error => {
        console.error("Error al obtener el documento:", error);
    });

    }, [id]);

    return (
        <div>
            {product && <ItemDetail {...product} />}
            
        </div>
    );
};

export default ItemDetailContainer;
