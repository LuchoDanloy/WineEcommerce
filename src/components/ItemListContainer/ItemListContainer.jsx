import {consultarBDD} from "../../assets/funciones.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";

//LLAMA A LA BASE DE DATOS Y SE LA ENVIA AL ITEMLIST
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    
    useEffect(() =>{
        consultarBDD().then(productList => {
            const cardProductos = ItemList({productList})
            setProductos(cardProductos)
        })
    }, []);

//[] se ejecuta cuando suceda cambio en todo el array
//[propiedad] cuando se modifica un objeto interno del array


    return (
        <>
            <div className="row" >
                {productos}
            </div>
            
        </>
    );
}

export default ItemListContainer;
