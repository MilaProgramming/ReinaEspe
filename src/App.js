import Galeria from "./pages/Galeria";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Carousel} from "./pages/Carousel"
import "./styles/carrusel.css"

function App() {
  return (
    <div className="App">
      <header>
        <h1>Elección del Rey</h1>
      </header>
      <Router>
        <Routes>
          <Route index element={<Carousel/>} />
        </Routes>    
      </Router>
    </div>
  );
}

export default App;
