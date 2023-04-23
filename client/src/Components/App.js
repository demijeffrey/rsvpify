// import '../App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Home from "./Home";
import UserHome from "./UserHome";
import UserEvent from "./UserEvent";
import EditEvent from "./EditEvent";
import NewEvent from "./NewEvent";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/event" element={<UserEvent />} />
        <Route path="/edit" element={<EditEvent />} />
        <Route path="/new-event" element={<NewEvent />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
