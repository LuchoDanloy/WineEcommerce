import React from "react";
import { useNavigate } from "react-router-dom";
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto} from "../../assets/firebase";
import { useCarritoContext } from "../../context/CarritoContext";
import { toast } from "react-toastify";

const Checkout = () => {
    const {totalPrice, carrito, emptyCart} = useCarritoContext()
    const datosFormulario = React.useRef() //REFERENCIA
    let navigate = useNavigate()//ME DICE EN DONDE ESTOY EN ESTE MOMENTO

    const consultarFormulario = (e) =>{
        //e: seria el evento es si
        e.preventDefault() //COMPORTAMIENTO POR DEFECTO
        const datoForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datoForm)//TRANSFORMA CADA UNO DE LOS VALORES Y LOS RETORNA EN UN SOLO OBJETO CON CLAVE/VALOR

        const aux = [...carrito]
        aux.forEach(prodCarrito => {
            //consulto el stock antes de actualizarlo
            getProducto(prodCarrito.id).then(prodBDD => {
                //caso de exito
                if(prodBDD.stock >= prodCarrito.cant){
                    prodBDD.stock -= prodCarrito.cant
                    //actualizo el stock
                    updateProducto(prodCarrito.id, prodBDD)

                //caso de fracaso    
                }else{
                    console.log("Stock no valido")
                    //caso de uso producto no comprado
                }
            })
        })

        createOrdenCompra(cliente,totalPrice(), new Date().toISOString().slice(0,10)).then(ordenCompra =>{
            getOrdenCompra(ordenCompra.id).then(item => {
                toast.success(`¡Muchas gracias por su compra! Su orden es ${item.id}`)
                emptyCart()
                e.target.reset() //limpiar el formulario
                navigate("/")
            }).catch(error => {
                toast.error("Su orden no fue generada con exito")
                console.error(error)
            })
        })
        

    }
/*********************************************************************/
/*     Para Implementar en Proyecto
    1- validar que si el carrito esta vacio no pueda finalizar compra.
    2- validar los campos requeridos en el Finalizar compra y validar los emails iguales.    */

/*********************************************************************/

    return (
        <div className="container">
            <form onSubmit={consultarFormulario} ref={datosFormulario} >
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email2" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" name="email2" required />
                </div>               
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" required />
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
