import CartWidget from "../CartWidget/CartWidget";
import Categorias from "./Categorias/Categorias";
import BotonDarkMode from "./BotonDarkMode/BotonDarkMode";

//CONTEXT
import { DarkModeContext, useDarkModeContext } from "../../context/DarkModeContext";

const Navbar = () => {

  const {darkMode} = useDarkModeContext()

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark p-0 ${darkMode ? 'bg-primary': 'bg-dark'} `}>
        <div className="container-fluid">
          <img src="../LaCasaDeCata.fw.png" alt="" className="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <Categorias />
            <CartWidget />
            <BotonDarkMode/>
          </div>
        </div>
      </nav>


    </>
  );
}

export default Navbar;
