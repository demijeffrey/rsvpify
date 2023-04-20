import { useNavigate } from "react-router-dom"
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
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
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
                        <li><a onClick={handleLogout}>Logout</a></li>
                        <li><a href="/signup">My Events</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
          </nav>
        )
    }
    
}

export default NavBar