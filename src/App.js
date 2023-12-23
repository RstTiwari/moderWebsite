import './App.css';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Home from "./Home"
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route >
        <Route path='/' element ={<Home />} />

        </Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
