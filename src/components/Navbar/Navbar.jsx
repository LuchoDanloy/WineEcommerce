import CartWidget from "../CartWidget/CartWidget";
import Categorias from "./Categorias/Categorias";

const Navbar = () => {
    return (
      <>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
              <a className="navbar-brand text-white bg-dark" href="#">LOGO</a>
          <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Categorias/>
          </div>
          <CartWidget/>
        </nav>
      </>
    );
}

export default Navbar;
