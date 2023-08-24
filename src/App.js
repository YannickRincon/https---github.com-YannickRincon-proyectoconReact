import './App.css';
import Heade from './componenetes/comp1/comp1';
import Foott from './componenetes/comp2/comp2';
import PlantImages from './componenetes/comp3/comp3';
import Carticon from './componenetes/comp4/comp4';
import Description from './componenetes/comp5/comp5';
import Main from './componenetes/comp6/comp6';
import Contact from './componenetes/comp8/comp8';

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
