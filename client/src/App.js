import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Controlls from "./Pages/Controlls";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/control" element={<Controlls />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
