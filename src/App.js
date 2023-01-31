import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import Home from "./components/common/Home";
import Patent_page from "./components/common/patent";
import Navbar from "./components/templates/Navbar";
import Publications from "./components/common/publications";


const Layout = () => {

  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Patent_page/>} />
        <Route path="login" element={<Publications />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;