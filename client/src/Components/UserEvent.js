import { useLocation, useNavigate } from "react-router-dom"
import { format } from 'date-fns'
import EditEvent from "./EditEvent"
import { useState, useEffect, useContext } from "react"
import InvitationForm from "./InvitationForm"
import EditEventGuests from "./EditEventGuests"
import { UserContext } from "../context/user"

function UserEvent() {

    const navigate = useNavigate()
    const {state} = useLocation()
    const {event} = state

    const [currentEvent, setCurrentEvent] = useState(event.event)

    const currentDate = new Date();
    const eventDate = new Date(currentEvent.date);

    const { removeUserEvent, updateEventGuests } = useContext(UserContext)

    const date = new Date(currentEvent.date.substring(0, 10));
    const formattedDate = format(date, 'MM-dd-yyyy');

    const time = currentEvent.time.substring(11, 16);
    const formattedTime = format(new Date(`1970-01-01T${time}`), 'hh:mm a');

    const [formFlag, setFormFlag] = useState(false)
    const [inviteFormFlag, setInviteFormFlag] = useState(false)
    const [confirmed, setConfirmed] = useState([])
    const [guestFlag, setGuestFlag] = useState(true)
    const [allGuests, setAllGuests] = useState(event.event.guests)
    
    useEffect(() => {
        const confirmedGuests = event.event.invitations.map(invite => {
            if(invite.rsvp_status === "attending") {
                const guest = event.event.guests.find(g => g.id === invite.guest_id)
                return guest
            } else {
                return null
            }
        })
        const filteredConfirmedGuests = confirmedGuests.filter(guest => guest !== null)
        setConfirmed(filteredConfirmedGuests)
    }, [allGuests])

    function addGuest(selectedGuests) {
        setAllGuests([...allGuests, ...selectedGuests])
        updateEventGuests(event.event, allGuests)
    }

    function removeGuests(id) {
        setConfirmed(confirmed.filter(g => g.id !== id))
        setAllGuests(allGuests.filter(g => g.id !== id))
        updateEventGuests(event.event, allGuests)
    }

    function handleCancelClick() {
        if (window.confirm('Are you sure you want to cancel this event?')) {
            fetch(`/events/${event.event.id}`, {
                method: 'DELETE'
            })
            removeUserEvent(event.event)
            navigate('/')
        }
    }

    const displayMessages = event.event.invitations.map(i => {
        if(i.message !== null) {
            const guest = event.event.guests.find(g => g.id === i.guest_id)
            return <li key={i.id}>{i.message} -- {guest.first_name}</li>
        } else {
            return null
        }
    })

    return (
        <div className="row">
            <div className="col s7 push-s5">
                <br />
                <div className="col s12 m5">
                    <div className="card-panel teal">
                        <h5 className="white-text center">
                            {currentEvent.description}
                        </h5>
                        <h5>Where:</h5>
                        <p>{currentEvent.location}</p>
                        <h5>When:</h5>
                        <p>{formattedDate} at {formattedTime}</p>
                    </div>
                </div>
                {guestFlag ? <div className="row">
                    <div className="col s12 m5">
                        <div className="card-panel grey lighten-3">
                            <h5 className="black-text center">
                            Guest List
                            </h5>
                            {confirmed !== [] ? confirmed.map(g => {
                                return <h6 key={g.id} className="green-text darken-2">{g.first_name} {g.last_name}</h6>
                            }) : null}
                            {allGuests.map(g => {
                                return confirmed.includes(g) ? null : <h6 key={g.id} className="red-text darken-2">{g.first_name} {g.last_name}</h6>
                            })}
                            <br />
                            <a className="waves-effect waves-light btn-small center" onClick={() => setGuestFlag(!guestFlag)}>Remove Guests</a>
                        </div>
                    </div>
                </div> : <EditEventGuests event={event.event} guestFlag={guestFlag} setGuestFlag={setGuestFlag} allGuests={allGuests} setAllGuests={setAllGuests} removeGuests={removeGuests} />}
                <div className="card-panel teal">
                    <h5 className="white-text center">
                        Guest Messages
                    </h5>
                    {displayMessages}
                </div>
                <br />
                <div className="row">{formFlag ? <EditEvent event={event.event} formFlag={formFlag} setFormFlag={setFormFlag} setCurrentEvent={setCurrentEvent} /> : null}</div>
            </div>
            <div className="col s5 pull-s7">
                <br />
                <img className="container center" src={event.event.photo_url || "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg"} />
                <h3>{event.event.name}</h3>
                <a className="waves-effect waves-light btn-large" onClick={() => setFormFlag(!formFlag)}><i className="material-icons left">edit</i>Edit Event</a>
                <br />
                {/* <a className="waves-effect waves-light btn-large" onClick={() => setInviteFormFlag(!inviteFormFlag)}><i className="material-icons left">insert_invitation</i>Invite</a> */}
                {currentDate < eventDate ? <a className="waves-effect waves-light btn-large" onClick={() => setInviteFormFlag(!inviteFormFlag)}><i className="material-icons left">insert_invitation</i>Invite</a> : null}
                <br />
                <a className="waves-effect waves-light btn-large red" onClick={handleCancelClick}><i className="material-icons left">edit</i>Cancel Event</a>
                {inviteFormFlag ? <InvitationForm event={event.event} inviteFormFlag={inviteFormFlag} setInviteFormFlag={setInviteFormFlag} addGuest={addGuest} /> : null}
            </div>
      </div>
    )

}

export default UserEvent