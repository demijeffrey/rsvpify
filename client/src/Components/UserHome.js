import { useContext, useState } from "react"
import { UserContext } from "../context/user"
import { useNavigate } from "react-router-dom"
import EventCard from "./EventCard"
import AddContactForm from "./AddContact"
import DeleteContacts from "./DeleteContacts"
import '../App.css';

function UserHome() {

    const { user, removeUserContact } = useContext(UserContext)

    const [contactFormFlag, setContactFormFlag] = useState(false)
    const [removeFormFlag, setRemoveFormFlag] = useState(false)
    const [contacts, setContacts] = useState(user.guests)

    const family = []
    const friends = []

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

   contacts.map(guest => {
        if(guest.family) {
            family.push(guest)
            return guest
        } else {
            friends.push(guest)
            return guest
        }
    })

    function handleNewClick() {
        navigate('/new-event')
    }

    function removeContacts(c) {
        removeUserContact(c)
        setContacts(contacts.filter(contact => c.id !== contact.id))
    }

    return (
        <div>
            <h1 className="center">Hello, {user.first_name}</h1>
            <div className="row">
                <div className="col s3">
                    <a className="waves-effect waves-light btn-large" onClick={handleNewClick}><i className="material-icons right">event</i>New Event</a>
                    <br />
                    <a className="waves-effect waves-light btn-large" onClick={() => setContactFormFlag(!contactFormFlag)}><i className="material-icons right">person_add</i>New Contact</a>
                    <a className="waves-effect waves-light btn-large" onClick={() => setRemoveFormFlag(!removeFormFlag)}><i className="material-icons right">remove_circle</i>Remove Contacts</a>
                    {contactFormFlag ? <AddContactForm contactFormFlag={contactFormFlag} setContactFormFlag={setContactFormFlag} contacts={contacts} setContacts={setContacts} /> : null}
                    {removeFormFlag ? <DeleteContacts removeFormFlag={removeFormFlag} setRemoveFormFlag={setRemoveFormFlag} contacts={user.guests} removeContacts={removeContacts} /> : null}
                    <br />
                    <div>
                        <h5 className="center contacts">Contacts</h5>
                        <h6 className="contact-categories">Family</h6>
                        {family.map(fM => {
                            return <ul key={fM.id} className="contact-names">{fM.first_name} {fM.last_name}
                                <li className="email">{fM.email}</li>
                            </ul>
                        })}
                        <br />
                        <h6 className="contact-categories">Friends</h6>
                        {friends.map(friend => {
                            return <ul key={friend.id} className="contact-names">{friend.first_name} {friend.last_name}
                                <li className="email">{friend.email}</li>
                            </ul>
                        })}
                    </div>
                </div>
                <div className="col s9">
                    <h4 className="all-events-header">All Upcoming Events</h4>
                    <div className="event-cards">{displayEvents}</div>
                </div>
        </div>
    </div>
    )

}

export default UserHome