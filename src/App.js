import './App.css';
import Heade from './componenetes/comp1/comp1';
import Foott from './componenetes/comp2/comp1';
import Location from './componenetes/comp3/comp1';
import Carticon from './componenetes/comp4/comp1';
import Description from './componenetes/comp5/comp1';
import Main from './componenetes/comp6/comp1';
import Cart from './componenetes/comp7/comp1';
import Contact from './componenetes/comp8/comp1';

function App() {
  return (
    <>
    
    <div className="App">
    <div><Heade></Heade></div>
    <div><Carticon></Carticon></div>
    <div><Description></Description></div>
    <div><Main></Main></div>
    <div><Cart></Cart></div>
    <div><Contact></Contact></div>
    <div><Location></Location></div>
    <div><Foott></Foott></div>
    </div>
    
    </>
  );
}

export default App;
