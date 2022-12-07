import {consultarBDD} from "../../assets/funciones.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";

//LLAMA A LA BASE DE DATOS Y SE LA ENVIA AL ITEMLIST
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()
    let idCategory 

    useEffect(() => {
            if(category) {

                switch (category) {
                    case "vinos":
                        idCategory = 1
                        break
                    case "espumantes":
                        idCategory = 2
                        break
                    case "cervezas":
                        idCategory = 3
                        break
                    case "aperitivos":
                        idCategory = 4
                        break
                }

                consultarBDD('../json/productos.json').then(products => {
                    const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === idCategory)
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            } else {
                consultarBDD('./json/productos.json').then(products => {
                    const productsList= products.filter(prod => prod.stock > 0)
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            }
            
        
    },[category]);

//[] se ejecuta cuando suceda cambio en todo el array
//[propiedad] cuando se modifica un objeto interno del array


    return (
        <>
            <div className="row cardProductos" >
                {productos}
            </div>
            
        </>
    );
}

export default ItemListContainer;
