
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Recipepage from "./pages/Recipepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbarr/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe/:id" element={<Recipepage />} />
      </Routes>
    <Footer/>
 

    </>
  );
}

export default App;