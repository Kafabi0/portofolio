import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import "./index.css";
import Galerry from './pages/Galerry';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Galerry" element={<Galerry />} />
        </Routes>
      </main>
    </Router>
  );  
}

export default App;
