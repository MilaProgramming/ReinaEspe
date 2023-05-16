import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Carousel} from "./pages/Carousel"
import "./styles/carrusel.css"
import Home from "./pages/Home";
import Preguntas from "./pages/preguntas/Preguntas.js"
import Traje from "./pages/Traje";


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

          <Route path='/ronda_preguntas' element={<Preguntas/>}/>
          
          <Route path='/traje' element={<Traje/>}/>
          
        </Routes>    
      </Router>
    </div>
  );
}

export default App;
