import { useContext } from "react"
import { UserContext } from "../context/user"
import EventCard from "./EventCard"
import '../App.css';

function PastEvents() {

    const {user} = useContext(UserContext)

    const displayEvents = user.events.map(e => {
        const currentDate = new Date()
        if(e.date){
            const eventDate = new Date(e.date);
            if(eventDate < currentDate){
                return <EventCard key={e.id} event={e} />;
            }
        }
    })

    return(
        <div>
            <h4 className="center all-events-header">Past Events</h4>
            <br />
            <div className="container">
                <div className="event-cards">{displayEvents}</div>
            </div>
        </div>
    )

}

export default PastEvents