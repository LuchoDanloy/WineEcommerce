
import './App.css';
import 'react-toastify/dist/ReactToastify.css'

//ROUTER DOM
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//CONXTEXT
//solo se importa el proveedor solo para saber el alcance
import { DarkModeProvider } from '../context/DarkModeContext';

//Toastify
import { ToastContainer } from 'react-toastify';

//COMPONENTES
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart'
import Checkout from "./Checkout/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>  
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/producto/:id' element={<ItemDetailContainer/>} />
            <Route path='/category/:category' element={<ItemListContainer/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
          <ToastContainer/>
        </DarkModeProvider>

      </BrowserRouter>
    </>
  );
}

export default App;
