import { useLocation } from "react-router-dom"
import { format } from 'date-fns'
import EditEvent from "./EditEvent"
import { useState, useEffect } from "react"
import InvitationForm from "./InvitationForm"

function UserEvent() {

    const [formFlag, setFormFlag] = useState(false)
    const [inviteFormFlag, setInviteFormFlag] = useState(false)
    const [confirmed, setConfirmed] = useState([])

    const {state} = useLocation()
    const {event} = state

    const date = new Date(event.event.date.substring(0, 10));
    const formattedDate = format(date, 'MM-dd-yyyy');

    const time = event.event.time.substring(11, 16);
    const formattedTime = format(new Date(`1970-01-01T${time}`), 'hh:mm a');

    console.log(event.event.invitations)

    
    useEffect(() => {
        const confirmedGuests = event.event.invitations.map(invite => {
            if(invite.rsvp_status === "attending") {
                const guest = event.event.guests.find(g => g.id === invite.guest_id)
                // console.log(guest)
                return guest
            } else {
                return null
            }
        })
        const filteredConfirmedGuests = confirmedGuests.filter(guest => guest !== null)
        setConfirmed(filteredConfirmedGuests)
    }, [])

    function handleEditClick() {
        setFormFlag(!formFlag)
    }

    function handleInviteClick() {
        setInviteFormFlag(!inviteFormFlag)
    }

    // console.log(confirmed)

    return (
        <div className="row">
            <div className="col s7 push-s5">
                <br />
                <div className="">
                <a className="btn-floating btn-large waves-effect waves-light green right" onClick={handleEditClick}><i className="material-icons">edit</i></a>
                    <div className="col s12 m5">
                        <div className="card-panel teal">
                            <h5 className="white-text center">
                                {event.event.description}
                            </h5>
                            <h5>Where:</h5>
                            <p>{event.event.location}</p>
                            <h5>When:</h5>
                            <p>{formattedDate} at {formattedTime}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m5">
                        <div className="card-panel teal">
                            <h5 className="white-text center">
                            Attending
                            </h5>
                            {confirmed !== [] ? confirmed.map(g => {
                                return <p key={g.id}>{g.first_name} {g.last_name}</p>
                            }) : null}
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="col s12 m5">
                        <div className="card-panel teal">
                            <h5 className="white-text center">
                                Guest Messages
                            </h5>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">{formFlag ? <EditEvent event={event.event} /> : null}</div>
            </div>
            <div className="col s5 pull-s7">
                <br />
                <img className="container center" src={event.event.photo_url || "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg"} />
                <h3>{event.event.name}</h3>
                <a className="waves-effect waves-light btn-large" onClick={handleInviteClick}><i className="material-icons left">insert_invitation</i>Invite</a>
                {inviteFormFlag ? <InvitationForm event={event.event} /> : null}
                <div className="row">
                    <div className="col s12 m5">
                        <div className="card-panel teal">
                            <h5 className="white-text center">
                                Invites Sent
                            </h5>
                            {event.event.guests.map(g => {
                                return <p key={g.id}>{g.first_name} {g.last_name}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )

}

export default UserEvent