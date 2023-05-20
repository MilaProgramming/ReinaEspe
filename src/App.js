import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Carousel} from "./pages/Carousel"
import Traje from "./pages/Traje";
import Barra from "./pages/Barra";
import Login from "./pages/Login"
import Preguntas from "./pages/preguntas/Preguntas.js"
import NavBar from "./components/NavBar"


function App() {
  return (
    <div className="App">

      <NavBar texto="Elección Reina"/>
      
      <Router>
        <Routes>
          <Route index element={<Login/>} />
          <Route path="/carrusel" element={<Carousel />} />
          <Route path="/traje" element={<Traje />} />
          <Route path='/ronda_preguntas' element={<Preguntas/>}/>
          <Route path="/barra" element={<Barra/>} />
        </Routes>    
      </Router>
    </div>
  );
}

export default App;
