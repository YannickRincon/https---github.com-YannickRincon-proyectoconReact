import './App.css';
import Heade from './componenetes/comp1/comp1';
import Foott from './componenetes/comp2/comp2';
import PlantImages from './componenetes/comp3/comp3';
import Carticon from './componenetes/comp4/comp4';
import Description from './componenetes/comp5/comp5';
import Main from './componenetes/comp6/comp6';
import Contact from './componenetes/comp8/comp8';

//Se importan todos los componentes que estan en carpetas en la carpeta componentes
//Luego en el componente principal que muestra la pagina se llaman
//todos los componentes creados con la sintaxis de tag

function App() {
  return (
    
    <div className="App">

    <div><Heade></Heade></div>
    <div><Carticon></Carticon></div>
    <div><Description></Description></div>
    <div><Main></Main></div>
    <div><Contact></Contact></div>
    <div><PlantImages></PlantImages></div>
    <div><Foott></Foott></div>
    
    </div>
  );
}

export default App;
