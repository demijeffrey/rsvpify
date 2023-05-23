import { useState } from "react"

function EditEventGuests({ event, guestFlag, setGuestFlag, removeGuests }) {

    console.log(event)

    const [guests, setGuests] = useState(event.guests)

    function handleGuestRemoval(id) {
        fetch('/invitations', {
            method:'DELETE',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
                guest_id: id
            })
        })
        setGuests(guests.filter(g => g.id !== id))
        removeGuests(id)
    }

    return(
        <div className="row">
                    <div className="col s12 m5">
                        <div className="card-panel grey lighten-3">
                            <h5 className="black-text center">
                            Manage Guest List
                            </h5>
                            {guests.map(g => {
                                return (
                                    <h6 key={g.id}>{g.first_name} {g.last_name}  <button onClick={() => handleGuestRemoval(g.id)}>x</button></h6>
                            )})} 
                            <a className="waves-effect waves-light btn-small center" onClick={() => setGuestFlag(!guestFlag)}>Done</a>
                        </div>
                    </div>
                </div>
    )

}

export default EditEventGuests