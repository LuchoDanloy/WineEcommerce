import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";

//CARD PRODUCTO
const Item = ({ producto }) => {

    const {darkMode} = useDarkModeContext()

    return (
        <>
            <div className="card cardProducto">
                <img className="card-img-top" src={producto.img} alt="Card image cap" />
                <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody' } `}>
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(producto.precio)}</p>
                    <button className="btn btn-dark"> <Link className="nav-link" to={`/producto/${producto.id}`}>Ver Producto</Link> </button>
                </div>
            </div>
        </>
    );
}

export default Item;
