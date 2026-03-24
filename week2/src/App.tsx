import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CatGallery from "./pages/CatGallery";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/cats">Cats</Link>
      </nav>

      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/cats" element={<CatGallery />} />
      </Routes>
    </Router>
  );
}

export default App;