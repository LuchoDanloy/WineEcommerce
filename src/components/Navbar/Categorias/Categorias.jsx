import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <button className="btn btn-dark border border-white mx-1"><Link className="nav-link" to={"/"}>Home</Link></button>
            </li>
            <li className="nav-item">
                <button className="btn btn-dark border border-white mx-1"><Link className="nav-link" to={"/category/1"}>Vinos</Link></button>
            </li>
            <li className="nav-item">
                <button className="btn btn-dark border border-white mx-1"><Link className="nav-link" to={"/category/2"}>Espumantes</Link></button>
            </li>
            <li className="nav-item">
                <button className="btn btn-dark border border-white mx-1"><Link className="nav-link" to={"/category/3"}>Cervezas</Link></button>
            </li>

        </ul>
    );
}

export default Categorias;
