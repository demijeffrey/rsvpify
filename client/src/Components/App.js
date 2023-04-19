// import '../App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Home from "./Home";

import { fetchUser } from "../features/users/userSlice";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const [count, setCount] = useState(0);

  const user = useSelector((state) => state.users)
  const dispatch = useDispatch()

  console.log(user)

  useEffect(() => {
    dispatch(fetchUser())
  })

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
