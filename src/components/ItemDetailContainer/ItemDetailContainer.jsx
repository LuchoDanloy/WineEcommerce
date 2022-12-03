import { useState, useEffect } from "react";
import { consultarBDD } from "../../assets/funciones";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setproducto] = useState([]);

    useEffect( () => {
        consultarBDD().then(productos => {
            const prod = productos.find(product => product.id === 1)
            setproducto(prod)
        })
    }, []);

    return (
        <div className="card mb-3 container">
            <ItemDetail producto={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
