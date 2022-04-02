import { Home } from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Auth/Login/Login";
import { Register } from "./components/Auth/Register/Register";
import { Apartment } from "./components/Detail/Apartment";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Navbar } from "./components/Navbar/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<Apartment />} />
      </Routes>
    </Router>
  );
}

export default App;
