function NavBar() {

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
    
}

export default NavBar