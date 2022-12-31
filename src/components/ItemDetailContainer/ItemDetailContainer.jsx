import { useState, useEffect } from "react";
import { consultarBDD } from "../../assets/funciones";
import {useParams} from 'react-router-dom'
import { getProducto } from "../../assets/firebase";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setproducto] = useState([]);
    const {id} = useParams()

    useEffect( () => {
        getProducto(id).then(productos => setproducto(prod))
        
    }, []);

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail producto={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
