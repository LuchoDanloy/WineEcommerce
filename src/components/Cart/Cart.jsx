import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <>
            <h1>productos en el carro</h1>
            <button type="submit" className="btn btn-primary"><Link to={'/checkout'}>Finalizar Compra</Link></button>
        </>
    );
}

export default Cart;
