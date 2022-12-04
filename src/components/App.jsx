
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//COMPONENTES
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/producto/:id' element={<ItemDetailContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
