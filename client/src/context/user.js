import React, { useState, useEffect } from "react";

const UserContext = React.createContext()

function UserProvider({children}) {

    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        fetch('/current-user')
            .then(res => res.json())
            .then(currentUser => {
                setUser(currentUser)
                currentUser.error ? setLoggedIn(false) : setLoggedIn(true)
            })
    }, [])

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)
    }

    return (
        <UserContext.Provider value={{user, loggedIn, signup, login, logout}}>
            {children}
        </UserContext.Provider>
    )

}

export { UserContext, UserProvider }