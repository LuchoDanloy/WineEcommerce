import {useState} from 'react';
import { useDarkModeContext } from '../../context/DarkModeContext';

const ItemCuont = ({inicial, stock, onAdd}) => {
    const {darkMode} = useDarkModeContext()
    const [contador, setContador] = useState(inicial)

    const sumar = () => {
        if (contador < stock)
            setContador(contador + 1)   
    }
    const restar = () => {
        if(contador > 1)
            setContador(contador - 1)   
    }

    const agregarAlCarrito = () => onAdd(contador)
    

    return (
        //Al onClick se le pasa una funcion flecha para que se ejecute cuando se llama al evento.
        <div>    
            <button className={`btn ${darkMode ? 'btn-dark' : 'btn-light'} mx-2`} onClick={() => sumar()} ><i className="fas fa-solid fa-plus fa-lg"></i></button>
            {contador}
            <button className={`btn ${darkMode ? 'btn-dark' : 'btn-light'} mx-2`} onClick={() => restar()} ><i className="fas fa-solid fa-minus fa-lg"></i></button>
            <button className={`btn ${darkMode ? 'btn-primary' : 'btn-dark'}`} onClick={agregarAlCarrito} ><i class="fas fa-solid fa-cart-plus"></i> agregar al carrito</button>
            
        </div>
    );
}

export default ItemCuont;
