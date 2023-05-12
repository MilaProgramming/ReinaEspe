import Galeria from "./pages/Galeria";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Carousel} from "./pages/Carousel"
import "./styles/carrusel.css"
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Elección de la Reina</h1>
      </header>
      <Router>
        <Routes>
          <Route index element={<Carousel/>} />
          <Route path="/home" element={<Home />} />
        </Routes>    
      </Router>
    </div>
  );
}

export default App;
