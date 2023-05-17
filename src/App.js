import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Carousel} from "./pages/Carousel"
import "./styles/carrusel.css"
import Traje from "./pages/Traje";
import Barra from "./pages/Barra";
import Preguntas from "./pages/preguntas/Preguntas.js"


function App() {
  return (
    <div className="App">
      <header>
        <h1>Elección de la Reina</h1>
      </header>
      <Router>
        <Routes>
          <Route index element={<Carousel/>} />
          <Route path="/traje" element={<Traje />} />
          <Route path='/ronda_preguntas' element={<Preguntas/>}/>
          <Route path="/barra" element={<Barra/>} />
        </Routes>    
      </Router>
    </div>
  );
}

export default App;
