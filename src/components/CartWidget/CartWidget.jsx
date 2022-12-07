import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
    
        <Link className="btn btn-primary" to={"/cart"}>
            <i className="fas fa-shopping-cart fa-lg"></i>
            <span className="cantCarrito">0</span>                  
        </Link>        

    );
}

export default CartWidget;
