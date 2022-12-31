import { useState, createContext, useContext } from "react";

const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState([]);

    //VER CANTIDAD
    //AGREGAR PRODUCTO
    //ELIMINAR PRODUCTO
    //VACIAR CARRITO
    //FINALIZAR COMPRA
    //BUSCAR PRODUCTO

    //exite en el carrito
    const isInCart = (id) => {
        //retorna True o Undefined (False)
        return carrito.find(producto => producto.id === id)
    }

    const addItem = (producto, cantidad) => {
        //si existe piso la cantidad
        if (isInCart(producto.id)){
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            //copia del carrito
            const aux = [...carrito]
            //seteo la cantidad del carrito auxuliar
            aux[indice].cant = cantidad
            //luego seteo el carrito original
            setCarrito(aux)
        }else{
        //si no existe lo agrego
            const nuevoProducto = {
                ...producto,
                cant : cantidad
            }
            setCarrito([...carrito, nuevoProducto])
        }

    }

    const emptyCart = () =>{
        setCarrito([])
    }

    const removeItem = (id) => {
        /*const aux = [...carrito]
        const indice = aux.findIndex(prod => prod.id === id)
        setCarrito(aux.splice(indice,1))*/
        
        //FORMA EN UNA SOLA LINEA:
        setCarrito(carrito.filter(prod => prod.id !== id))

    }

    //TOTAL DE CANTIDAD DE PRODUCTOS
    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.cant, 0)
    }

    //PRECIO TOTAL DE TODOS LOS PRODUCTOS
    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio),0)
    }

    return (
        <CarritoContext.Provider value={{carrito, isInCart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
            {props.children}
        </CarritoContext.Provider>
    )

} 