import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCarritoContext } from "../../context/CarritoContext";

const Cart = () => {

    const {darkMode} = useDarkModeContext()
    const {carrito, emptyCart, removeItem, totalPrice} = useCarritoContext()

    return (
        <>
            {carrito.length === 0 ?
                <>
                    <h1 className= {`${darkMode ? 'text-white': 'none'}  my-2`} >Carrito Vacio</h1> 
                    <button type="submit" className= {`${darkMode ? 'btn bg-primary': 'btn bg-dark'} text-white my-2`}><Link to={'/'} className="nav-link">Continuar Comprando</Link></button> 
                </>
            :
                <div className="container cartContainer">
                    {
                        carrito.map(prod => 
                            <div className="card itemCart mb-3" key={prod.id} >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={prod.img} alt="Producto" className="img-fluid rounded-start" />
                                    </div>
                                    <div className="col-md-8"> 
                                        <div className= {`row ${darkMode ? 'detailCardBodyDark' : 'detailCardBody'}`} >
                                            <div className="col-md-10">
                                                <h5 className="card-title" >{`${prod.nombre} - ${prod.marca}`}</h5>
                                                <p className="card-text">Cantidad: {prod.cant}</p>
                                                <p className="card-text">Precio unitario: ${new Intl.NumberFormat('de-DE').format(prod.precio)}</p>   
                                                <p className="card-text">Precio Total: $ {new Intl.NumberFormat('de-DE').format(prod.precio * prod.cant)}</p>
                                                <p className="card-text">Cantidad: {prod.cant}</p>
                                            </div>
                                            <div className="col-md-2">
                                                <button className="btn btn-danger" onClick={() => removeItem(prod.id)}><i className="fas fa-trash-alt fa-lg"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )}
                    
                    <div>
                        <p>Resumen Total Compra: $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <button className="btn btn-danger mx-2" onClick={emptyCart} > Vaciar Carrito </button>
                        <button type="submit" className= {`${darkMode ? 'btn bg-primary': 'btn bg-dark'} text-white mx-2`}><Link to={'/'} className="nav-link">Continuar Comprando</Link></button>
                        <button type="submit" className= {`${darkMode ? 'btn bg-primary': 'btn bg-dark'} text-white mx-2`}><Link to={'/checkout'} className="nav-link">Finalizar Compra</Link></button>
                    </div>
 
                </div>
            }

        </>
    );
}

export default Cart;

