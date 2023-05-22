import React, { useState, useEffect } from "react";

const UserContext = React.createContext()

function UserProvider({children}) {

    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [userEvents, setUserEvents] = useState([])

    useEffect(() => {
        fetch('/current-user')
            .then(res => res.json())
            .then(currentUser => {
                // debugger
                if(currentUser === null) {
                    setLoggedIn(false)
                } else {
                    setUser(currentUser)
                    setUserEvents(currentUser.events)
                    setLoggedIn(true)
                }
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

    const addUserEvent = (event) => {
        setUserEvents([...userEvents, event])
    }

    const removeUserEvent = (event) => {
        const newEventList = userEvents.filter((e) => e.id !== event.id)
        setUserEvents(newEventList)
    }

    return (
        <UserContext.Provider value={{user, loggedIn, signup, login, logout, addUserEvent, removeUserEvent}}>
            {children}
        </UserContext.Provider>
    )

}

export { UserContext, UserProvider }