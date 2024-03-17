import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../src/services/firebase/firebaseConfig";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludos }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { grupo } = useParams();

    useEffect(() => {
        setLoading(true);
        const collectionRef = grupo
            ? query(collection(db, "products"), where("grupo", "==", grupo))
            : collection(db, "products");

        getDocs(collectionRef)
            .then((querySnapshot) => {
                const productsAdapted = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                       

                        ...data
                    };
                });
                setProducts(productsAdapted);
            })
            .catch((error) => {
                console.error("Error fetching documents: ", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [grupo]); // Se agregó grupo como dependencia para que el efecto se ejecute cuando cambie

    return (
        <div>
            <h1>{saludos}</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;
