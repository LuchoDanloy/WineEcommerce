import { DarkModeContext, useDarkModeContext } from "../../../context/DarkModeContext";

const BotonDarkMode = () => {

    const {toogleDarkMode} = useDarkModeContext()

    return (
        <div className="form-check form-switch">
            <input className="form-check-input" onInput={() => toogleDarkMode()} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>

    );
}

export default BotonDarkMode;
