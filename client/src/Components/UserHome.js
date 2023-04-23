import { useContext } from "react"
import { UserContext } from "../context/user"
import { useNavigate } from "react-router-dom"
import EventCard from "./EventCard"

function UserHome() {

    const {user} = useContext(UserContext)
    console.log(user.events)

    const navigate = useNavigate()

    const displayEvents = user.events && user.events.map(e => <EventCard key={e.id} event={e} />)

    function handleNewClick() {
        navigate('/new-event')
    }

    return (
        <div>
            <h1>Hello, {user.first_name}</h1>
            <div className="row">
                <div className="col s3">
                    <a className="waves-effect waves-light btn-large" onClick={handleNewClick}><i className="material-icons right">add</i>New Event</a>
                </div>
                <div className="col s9">
                    {displayEvents}
                </div>
        </div>
    </div>
    )

}

export default UserHome