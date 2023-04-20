// import '../App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Home from "./Home";
import UserHome from "./UserHome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
