// React Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// CSS Imports
import "./App.css";

// Component Imports
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import NoMatch from "./components/NoMatch";
import Home from "./components/Landing/Home";
import Login from "./components/Auth/Login";
import LoginB from "./components/Auth/LoginB";
import SignUp from "./components/Auth/SignUp";
import SignUpB from "./components/Auth/SignUpB";
import ListWaste from "./components/ListWaste";
import Landing from "./components/Landing/Landing";
import WasteStore from "./components/Stores/WasteStore";
import ProductStore from "./components/Stores/ProductStore";

function App() {
  const { currentUser } = [];

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* {currentUser ? (
            <Route path="/" element={<Home />} exact={true} />
          ) : (
            <Route path="/" element={<Landing />} exact={true} />
          )} */}
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/loginbuyer" element={<LoginB />} />
          <Route path="/listwaste" element={<ListWaste />} />
          <Route path="/signupbuyer" element={<SignUpB />} />
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
