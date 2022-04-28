import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Controlls from "./Pages/Controlls";
import BlogPage from "./Pages/BlogPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/control" element={<Controlls />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
