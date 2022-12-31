import { useState, createContext, useContext } from "react";

const DarkModeContext = createContext() //funcion para creacion del contexto que provee react

//Funcion para exportar el contexto
export const useDarkModeContext = () => useContext(DarkModeContext)

//proveedor
const DarkModeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false);

    //funcion para modificar el valor
    const toogleDarkMode = () => {
        setDarkMode(!darkMode) //negacion del darkMode
        if(!darkMode)
            document.body.classList.add("darkMode")
        else
            document.body.classList.remove("darkMode")
    }

    return (
        <DarkModeContext.Provider value={{darkMode, toogleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export {DarkModeContext, DarkModeProvider}