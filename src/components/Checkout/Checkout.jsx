import React from "react";
import { useNavigate } from "react-router-dom";
import { createOrdenCompra, getOrdenCompra } from "../../assets/firebase";
import { useCarritoContext } from "../../context/CarritoContext";
import Item from "../Item/Item";
const Checkout = () => {
    const {totalPrice} = useCarritoContext()
    const datosFormulario = React.useRef() //REFERENCIA
    let navigate = useNavigate()//ME DICE EN DONDE ESTOY EN ESTE MOMENTO

    const consultarFormulario = (e) =>{
        //e: seria el evento es si
        e.preventDefault() //COMPORTAMIENTO POR DEFECTO
        const datoForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datoForm)//TRANSFORMA CADA UNO DE LOS VALORES Y LOS RETORNA EN UN SOLO OBJETO CON CLAVE/VALOR
        
        createOrdenCompra(cliente,totalPrice(), new Date().toISOString().slice(0,10)).then(ordenCompra =>{
            getOrdenCompra(ordenCompra.id).then(Item => {
                e.target.reset() //limpiar el formulario
                navigate("/")
            })
        })
        

    }

    return (
        <div className="container">
            <form onSubmit={consultarFormulario} ref={datosFormulario} >
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>

        </div>
    );
}

export default Checkout;
