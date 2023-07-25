import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <span className='logo'>Octaloop</span>
      <button onClick={()=>{navigate("/aboutus")}}>About Us</button>
      <button onClick={()=>{navigate("/services")}}>Our Services</button>
    </div>
  );
}

function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <span className='logo'>Octaloop</span>
      <button>Highly Skilled Employees</button>
      <button>Vaalues Customer</button>
      <button onClick={()=>{navigate("/")}}>Back</button>
    </div>
  );
}
function Services() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <span className='logo'>Octaloop</span>
      <button>Blockchain</button>
      <button>Software Development</button>
      <button onClick={()=>{navigate("/")}}>Back</button>
    </div>
  );
}

function App() {
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  </Router>
  )
}

export default App;
