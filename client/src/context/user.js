import React, { useState, useEffect } from "react";

const UserContext = React.createContext()

function UserProvider({children}) {

    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [userEvents, setUserEvents] = useState(null)

    useEffect(() => {
        fetch('/current-user')
            .then(res => res.json())
            .then(currentUser => {
                // debugger
                setUser(currentUser)
                currentUser.error ? setLoggedIn(false) : setLoggedIn(true)
            })
    }, [userEvents])

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
        setUserEvents([...user.events, event])
    }

    const updateUserEvent = (event) => {
        setUserEvents(user.events.map(e => {
            if(e.id === event.id) {
                return event
            } else {
                return e
            }
        }))
    }

    const removeUserEvent = (event) => {
        const newEventList = user.events.filter((e) => e.id !== event.id)
        setUserEvents(newEventList)
    }

    const updateEventGuests = (event, guests) => {
        const currentEvent = user.events.filter(e => e === event)
        currentEvent.guests = guests
        setUserEvents(user.events.map(uE => {
            if(uE === currentEvent) {
                return currentEvent
            } else {
                return uE
            }
        }))
    }

    return (
        <UserContext.Provider value={{user, loggedIn, signup, login, logout, addUserEvent, removeUserEvent, updateEventGuests, updateUserEvent}}>
            {children}
        </UserContext.Provider>
    )

}

export { UserContext, UserProvider }