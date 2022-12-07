import { Link } from "react-router-dom";

const Categorias = () => {
    return (


        <ul className="navbar-nav me-auto">
            <li className="nav-link">
                <Link className="nav-link" to={"/"}><i className="fas fa-home fa-lg"></i></Link>
            </li>
            <li className="nav-link">
                <Link className="nav-link" to={"/category/vinos"}>Vinos</Link>
            </li>
            <li className="nav-link">
                <Link className="nav-link" to={"/category/espumantes"}>Espumantes</Link>
            </li>
            <li className="nav-link">
                <Link className="nav-link" to={"/category/cervezas"}>Cervezas</Link>
            </li>
            <li className="nav-link">
                <Link className="nav-link" to={"/category/aperitivos"}>Aperitivos</Link>
            </li>

        </ul>
    );
}

export default Categorias;
