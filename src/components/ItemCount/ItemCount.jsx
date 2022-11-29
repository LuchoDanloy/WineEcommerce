import {useState} from 'react';

const ItemCuont = ({stock}) => {
    const [contador, setContador] = useState(0)

    const sumar = () => {
        if (contador < stock)
            setContador(contador + 1)   
    }
    const restar = () => {
        if(contador > 1)
            setContador(contador - 1)   
    }
    

    return (
        //Al onClick se le pasa una funcion flecha para que se ejecute cuando se llama al evento.
        <div>    
            <button className='btn btn-dark' onClick={() => sumar()} >+</button>
            {contador}
            <button className='btn btn-dark' onClick={() => restar()} >-</button>
            <button className='btn btn-dark mx-2'>Agregar al Carrito</button>
        </div>
    );
}

export default ItemCuont;
