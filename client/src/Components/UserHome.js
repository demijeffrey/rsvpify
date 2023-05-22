import { useContext, useState } from "react"
import { UserContext } from "../context/user"
import { useNavigate } from "react-router-dom"
import EventCard from "./EventCard"
import AddContactForm from "./AddContact"

function UserHome() {

    const {user} = useContext(UserContext)
    console.log(user.guests)

    const [contactFormFlag, setContactFormFlag] = useState(false)
    const [contacts, setContacts] = useState(user.guests)

    const navigate = useNavigate()

    const displayEvents = user.events.map(e => {
        const currentDate = new Date()
        if(e.date){
            const eventDate = new Date(e.date);
            if(eventDate > currentDate){
                return <EventCard key={e.id} event={e} />;
            }
        }
    })

    const displayGuests = contacts.map(guest => {
        return <ul key={guest.id}>{guest.first_name} {guest.last_name}
            <li>{guest.email}</li>
        </ul>
    })

    function handleNewClick() {
        navigate('/new-event')
    }

    function handleContactClick() {
        setContactFormFlag(!contactFormFlag)
    }

    return (
        <div>
            <h1 className="center">Hello, {user.first_name}</h1>
            <div className="row">
                <div className="col s3">
                    <a className="waves-effect waves-light btn-large" onClick={handleNewClick}><i className="material-icons right">add</i>New Event</a>
                    <br />
                    <a className="waves-effect waves-light btn-large" onClick={handleContactClick}><i className="material-icons right">person_add</i>New Contact</a>
                    {contactFormFlag ? <AddContactForm contactFormFlag={contactFormFlag} setContactFormFlag={setContactFormFlag} contacts={contacts} setContacts={setContacts} /> : null}
                    <br />
                    <h5 className="center">Contacts</h5>
                    {displayGuests}
                </div>
                <div className="col s9">
                <h4>All Upcoming Events</h4>
                    {displayEvents}
                </div>
        </div>
    </div>
    )

}

export default UserHome