import ItemCuont from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCarritoContext } from "../../context/CarritoContext";

const ItemDetail = ({producto}) => {
    const {darkMode} = useDarkModeContext()
    const {addItem}= useCarritoContext()

    //evento que pide como parametro un contador(cantidad de productos que esta comprando)
    const onAdd = (contador) => {
        addItem(producto, contador)
    }

    return (
        <div className="row g-0 ">
            <div className="col-md-4 imgBody">
                <img src={producto.img} alt="" className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8 my-1" >
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">Codigo: {producto.codigo}</p>
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(producto.precio)} </p>
                    <p className="card-text">Stock: {producto.stock}</p>
                    <ItemCuont inicial={1} stock={producto.stock} onAdd={onAdd} />
                    {/* <button className="btn btn-dark my-2">Finalizar Compra</button> */}
                    <button className={`btn ${darkMode ? 'btn-primary' : 'btn-secondary'}`}><Link to="/cart" className="nav-link">Finalizar compra</Link></button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
