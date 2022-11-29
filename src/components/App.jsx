
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCuont from './ItemCount/ItemCount';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Hola soy el Greeting"}/>
    </>
  );
}

export default App;
