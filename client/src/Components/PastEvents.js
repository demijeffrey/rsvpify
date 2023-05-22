import { useContext } from "react"
import { UserContext } from "../context/user"
import EventCard from "./EventCard"

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
            <h4 className="center">Past Events</h4>
            <br />
            <div className="container">
                {displayEvents}
            </div>
        </div>
    )

}

export default PastEvents