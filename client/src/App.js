import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from "./pages/Menu";
import Carousel from "./pages/Carousel"
import Prueba from "./pages/prueba"
import "./styles/carrusel.css"
import Traje from "./pages/Traje";
import Login from './pages/Login';
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
          <Route index element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/carousel' element={<Carousel />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/prueba' element={<Prueba />} />
          <Route path="/traje" element={<Traje />} />
          <Route path='/ronda_preguntas' element={<Preguntas/>}/>
          <Route path="/barra" element={<Barra/>} />
        </Routes>    
      </Router>
    </div>
  );
}

export default App;
