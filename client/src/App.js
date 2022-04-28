import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
