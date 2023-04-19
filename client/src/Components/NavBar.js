import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logoutUser } from "../features/users/userSlice"
import { useState } from "react"

function NavBar() {

    const currentUser = useSelector((state) => state.user)
    // console.log(currentUser[0])

    const [error, setError] = useState(null)

    const navigate = useNavigate()

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(() => {
            logoutUser()
            navigate('/login')
        })
    }

    if(currentUser[0]) {
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