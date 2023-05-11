
import './App.css';
import "boxicons";
import dragon from "./imagenes/dragon.png";
import libros from "./imagenes/libros.png"
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import CartWidget from './componentes/CartWidget/CartWidget';



function App() {
  return (
    <div className="App">
      <div className="logo">
          <img src={dragon} alt="logo" width="150"/>
          <h1>Segundo desafio</h1>
      </div>
      
    
      <Navbar/>
      <div className="Portada">
          <img src={libros} alt="portada" width="1000"/>
      </div>
      <CartWidget/>
      <ItemListContainer/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
      
      
   

    </div>
  );
}

export default App;
