import { useContext } from "react"
import { UserContext } from "../context/user"
import EventCard from "./EventCard"

function UserHome() {

    const {user} = useContext(UserContext)
    console.log(user.events)

    const displayEvents = user.events && user.events.map(e => <EventCard key={e.id} event={e} />)

    return (
        <div>
            <h1>Hello, {user.first_name}</h1>
            <div className="row">
                <div className="col s3">
                    <a className="waves-effect waves-light btn-large"><i className="material-icons right">add</i>New Event</a>
                </div>
                <div className="col s9">
                    {displayEvents}
                </div>
        </div>
    </div>
    )

}

export default UserHome