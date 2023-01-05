import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";
import { useDarkModeContext } from "../../context/DarkModeContext";
const CartWidget = () => {
    
    const {getItemQuantity} = useCarritoContext()
    const {darkMode} = useDarkModeContext()

    return (
    
        <Link className={`btn ${darkMode ? 'btn-primary': 'btn-dark'} m-2`} to={"/cart"}>
            
            <i className="fas fa-shopping-cart fa-lg"></i>
            {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
                              
        </Link>        

    );
}

export default CartWidget;
