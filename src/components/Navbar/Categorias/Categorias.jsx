import React from 'react';

const Categorias = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <button className="btn btn-dark border border-white mx-1">Vinos</button>
            </li>
            <li className="nav-item">
                <button className="btn btn-dark border border-white mx-1">Espumantes</button>
            </li>
            <li className="nav-item">
                <button className="btn btn-dark border border-white mx-1">Cervezas</button>
            </li>
        </ul>
    );
}

export default Categorias;
