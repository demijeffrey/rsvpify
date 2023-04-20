import { useContext } from "react"
import { UserContext } from "../context/user"
import EventCard from "./EventCard"

function UserHome() {

    const {user} = useContext(UserContext)
    console.log(user.events)

    const displayEvents = user.events && user.events.map(e => <EventCard event={e} />)

    return (
        <div>
            <h1>Hello, {user.first_name}</h1>
            <div className="row">
                <div className="col s3">    
                    hiii
                </div>
                <div className="col s9">
                    byyy
                    {displayEvents}
                </div>
        </div>
    </div>
    )

}

export default UserHome