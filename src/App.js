
import './App.css';
import Topbar from './Components/Topbar';
import Recherche from './Components/Recherche';
import Slider from './Components/Slider';
import Chaussures from './Components/Chaussures'


function App() {
  return (
    <div className="App">
      <Topbar/>
      <Recherche/>
      <Slider/>
      <Chaussures/>
      
    </div>
  );
}

export default App;
