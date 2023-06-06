import '../App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Home from "./Home";
import UserHome from "./UserHome";
import UserEvent from "./UserEvent";
import EditEvent from "./EditEvent";
import NewEvent from "./NewEvent";
import RSVP from "./RSVP";
import PastEvents from "./PastEvents";
import RSVPConfirmation from "./RSVPConfirmation";

function App() {

  return (
    <div className="App background-image">
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/event" element={<UserEvent />} />
        <Route path="/edit" element={<EditEvent />} />
        <Route path="/new-event" element={<NewEvent />} />
        <Route path="/-invitations/:id/rsvp/:token" element={<RSVP />} />
        <Route path="/-invitations/:id/rsvp/:token" element={<RSVP />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/thank-you" element={<RSVPConfirmation />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
