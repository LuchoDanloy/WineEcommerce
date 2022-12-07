import CartWidget from "../CartWidget/CartWidget";
import Categorias from "./Categorias/Categorias";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-0">
        <div className="container-fluid">
          <img src="LaCasaDeCata.fw.png" alt="" className="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <Categorias />
            <CartWidget />
          </div>
        </div>
      </nav>


    </>
  );
}

export default Navbar;
