import { useState, useEffect } from "react";
import { consultarBDD } from "../../assets/funciones";
import {useParams} from 'react-router-dom'

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setproducto] = useState([]);
    const {id} = useParams()

    useEffect( () => {
        consultarBDD("../json/productos.json").then(productos => {
            const prod = productos.find(product => product.id === parseInt(id))
            setproducto(prod)
        })
    }, []);

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail producto={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
