import { useLocation } from "react-router-dom"
import { format } from 'date-fns'
import EditEvent from "./EditEvent"
import { useState } from "react"
import InviteForm from "./InviteForm"

function UserEvent() {

    const [formFlag, setFormFlag] = useState(false)
    const [guestFormFlag, setGuestFormFlag] = useState(false)

    const {state} = useLocation()
    const {event} = state

    const date = new Date(event.event.date.substring(0, 10));
    const formattedDate = format(date, 'MM-dd-yyyy');

    const time = event.event.time.substring(11, 16);
    const formattedTime = format(new Date(`1970-01-01T${time}`), 'hh:mm a');

    console.log(event.event.guests)

    function handleEditClick() {
        setFormFlag(!formFlag)
    }

    function handleInviteClick() {
        setGuestFormFlag(!guestFormFlag)
    }

    return (
        <div className="row">
            <div className="col s7 push-s5">
                <br />
                <div className="row">
                <a className="btn-floating btn-large waves-effect waves-light green right" onClick={handleEditClick}><i className="material-icons">edit</i></a>
                    <div className="col s12 m5">
                        <div className="card-panel teal">
                            <h5 className="white-text">
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
                            <h5 className="white-text">
                                {event.event.guests}
                            </h5>
                        </div>
                    </div>
                </div>
                <br />
                {formFlag ? <EditEvent event={event.event} /> : null}
            </div>
            <div className="col s5 pull-s7">
                <br />
                <img className="container center" src={event.event.photo_url || "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg"} />
                <h3>{event.event.name}</h3>
                <a class="waves-effect waves-light btn-large" onClick={handleInviteClick}><i class="material-icons left">insert_invitation</i>Invite</a>
                {guestFormFlag ? <InviteForm event={event.event} /> : null}
            </div>
      </div>
    )

}

export default UserEvent