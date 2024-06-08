
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Recipepage from "./pages/Recipepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe/:id" element={<Recipepage />} />
      </Routes>
    </>
  );
}

export default App;