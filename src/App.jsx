import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
