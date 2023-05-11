import Login from "./pages/Login";
import Galeria from "./pages/Galeria";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Galeria/>} />
        </Routes>    
      </Router>
    </div>
  );
}

export default App;
