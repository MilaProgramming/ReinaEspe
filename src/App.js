import Home from "./pages/Home";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home/>} />
        </Routes>    
      </Router>
    </div>
  );
}

export default App;
