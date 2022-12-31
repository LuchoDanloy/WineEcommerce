import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";
const CartWidget = () => {
    
    const {getItemQuantity} = useCarritoContext()

    return (
    
        <Link className="btn btn-primary" to={"/cart"}>
            <i className="fas fa-shopping-cart fa-lg"></i>
            {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
                              
        </Link>        

    );
}

export default CartWidget;
