import { useContext } from "react"
import { UserContext } from "../context/user"
import UserHome from "./UserHome"
import '../App.css';

function Home() {

    const { loggedIn } = useContext(UserContext)

    if(!loggedIn) {
        return (
            <div className="home-header">
                <h2 className="rsvpify-text">Welcome to RSVPify:</h2><h5>An Event Invitation Manager to Simplify Your Event Planning</h5>
                <br/>
                <h6 className="h6-home">Login or Sign Up to Get Started!</h6>
                <br/>
            </div>
        )
    } else {
        return (
            <UserHome />
        )
    }
}
export default Home