import React from "react";
import { useNavigate } from "react-router-dom";
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto} from "../../assets/firebase";
import { useCarritoContext } from "../../context/CarritoContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Checkout = () => {
    const {totalPrice, carrito, emptyCart} = useCarritoContext()
    const datosFormulario = React.useRef() //REFERENCIA
    let navigate = useNavigate()//ME DICE EN DONDE ESTOY EN ESTE MOMENTO

    const {register, formState: {errors} , watch,handleSubmit} = useForm()


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
                    toast.error(`El producto ${prodBDD.nombre} no posee stock`)
                    emptyCart()
                    navigate("/")
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
    
    //VALIDA QUE LOS MAILS SEAN IGUALES
    const validatorEmails = () => {
        return watch('email') === watch('email2')
    }

    //DESPUES DE VALIDAR TODO LLAMAMOS A consultarFormulario()
    const onSubmit = (data) =>{
        consultarFormulario()
    }

    return (
        <div className="container my-4">
            <form onSubmit={handleSubmit(onSubmit)} ref={datosFormulario} >
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control border border-secondary" name="nombre" {...register('nombre', {
                        required: true,
                        maxLength:50
                    })} />
                    {errors.nombre?.type === 'required' && <p className="formMensajes" >el campo nombre es requerido</p>}
                    {errors.nombre?.type === 'maxLength' && <p className="formMensajes">50 caracteres como maximo</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control border border-secondary" name="email" {...register('email', {
                         required: true
                    })} />
                    {errors.email?.type === 'required' && <p className="formMensajes">el campo email es requerido</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email2" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control border border-secondary" name="email2" {...register('email2', {
                        required: true,
                        validate: validatorEmails
                    })} />
                    {errors.email2?.type === 'required' && <p className="formMensajes">el campo repetir email es requerido</p>}
                    {errors.email2?.type === 'validate' && <p className="formMensajes">los emails no coinciden</p>}
                </div>               
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control border border-secondary" name="dni" {...register('dni', {
                         required: true
                    })} />
                    {errors.dni?.type === 'required' && <p className="formMensajes">el campo dni es requerido</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control border border-secondary" name="celular" {...register('celular', {
                         required: true
                    })} />
                    {errors.celular?.type === 'required' && <p className="formMensajes">el campo celular es requerido</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control border border-secondary" name="direccion" {...register('direccion', {
                         required: true
                    })} />
                    {errors.direccion?.type === 'required' && <p className="formMensajes">el campo direccion es requerido</p>}
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>

        </div>
    );
}

export default Checkout;
