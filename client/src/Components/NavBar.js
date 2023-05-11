import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../context/user"
import { useContext } from "react"

function NavBar() {

    const navigate = useNavigate()
    const {logout, loggedIn} = useContext(UserContext)

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(() => {
            logout()
            navigate('/login')
        })
    }

    if(!loggedIn) {
        return(
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo right">RSVPify</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/signup">Sign Up</NavLink></li>
                        <li><NavLink to="collapsible.html">JavaScript</NavLink></li>
                    </ul>
                </div>
          </nav>
        )
    } else {
        return(
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo right">RSVPify</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><NavLink onClick={handleLogout}>Logout</NavLink></li>
                        <li><NavLink to="/">My Events</NavLink></li>
                        <li><NavLink to="/past-events">Past Events</NavLink></li>
                    </ul>
                </div>
          </nav>
        )
    }
    
}

export default NavBar