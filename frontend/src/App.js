import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import NoMatch from "./components/NoMatch";
import WasteStore from "./components/WasteStore";
import ProductStore from "./components/ProductStore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/waste-store" element={<WasteStore />} />
          <Route path="/product-store" element={<ProductStore />} />
          <Route path="/contact" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
