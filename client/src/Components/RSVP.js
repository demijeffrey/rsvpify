import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { format } from 'date-fns'
import RSVPForm from "./RSVPForm"

function RSVP() {

    const { token } = useParams()
    const [invitation, setInvitation] = useState({})
    const [guest, setGuest] = useState({})
    const [event, setEvent] = useState({})

    // console.log(invitation)
    // console.log(eventDate)

    useEffect(() => {
        fetch(`/invitations/${token}`)
        .then(res => res.json())
        .then(invite => {
            setInvitation(invite)
            setGuest(invite.guest)
            setEvent(invite.event)
        })
    }, [])

    let formattedDate = ""
    let formattedTime = ""

    if (event.date) {
        const date = new Date(event.date.substring(0, 10));
        formattedDate = format(date, 'MM-dd-yyyy');
    }

    if (event.time) {
        const time = event.time.substring(11, 16);
        formattedTime = format(new Date(`1970-01-01T${time}`), 'hh:mm a');
    }

    return (
        <div className="center">
            <h2>Hello, {guest.first_name}</h2>
            <div className="row">
                <div className="col s7">
                    <div className="row center">
                        <div className="col s12 m7">
                            <div className="card">
                                <div className="card-image">
                                    <img src={event.photo_url} />
                                    {/* <span className="card-title black">{event.name}</span> */}
                                </div>
                                <div className="card-content">
                                    <h6>{event.description}</h6>
                                    <h5>When:</h5>
                                    {/* <p>{event.date} at {event.time}</p> */}
                                    <p>{formattedDate} at {formattedTime}</p>
                                    <h5>Where:</h5>
                                    <p>{event.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s5">
                    <h4>RSVP to {event.name}</h4>
                    <br />
                    <RSVPForm token={token} />
                </div>
            </div>
        </div>
    )

}

export default RSVP