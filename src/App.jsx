import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Retrieve from "./components/Retrieve";
import AddNewPerson from "./components/AddNewPerson";
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddNewPerson />} />
          <Route path="/retrieve" element={<Retrieve />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
