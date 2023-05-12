import Galeria from "./pages/Galeria";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Carousel} from "./pages/Carousel"
import "./styles/carrusel.css"
<<<<<<< HEAD
import Home from "./pages/Home";
=======
import Preguntas from "./pages/preguntas/Preguntas.js"

>>>>>>> 7e916853f772ee21491b4ebb78bc6b3b8bb41d33

function App() {
  return (
    <div className="App">
      <header>
        <h1>Elección de la Reina</h1>
      </header>
      <Router>
        <Routes>
          <Route index element={<Carousel/>} />
<<<<<<< HEAD
          <Route path="/home" element={<Home />} />
=======
          <Route path='/ronda_preguntas' element={<Preguntas/>}/>
          
>>>>>>> 7e916853f772ee21491b4ebb78bc6b3b8bb41d33
        </Routes>    
      </Router>
    </div>
  );
}

export default App;
