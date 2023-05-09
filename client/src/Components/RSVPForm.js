import { useState } from "react"

function RSVPForm({ token }) {

    const [plusOne, setPlusOne] = useState(false)
    const [rsvpStatus, setRsvpStatus] = useState('')
    const [message, setMessage] = useState(null)

    console.log(token)

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/invitations', {
            method: 'PATCH',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                plus_one: plusOne,
                rsvp_status: rsvpStatus,
                message: message,
                token: token
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <p>Are you attending?</p>
                <label>
                    <input name="group1" type="radio" value="not attending" onChange={e => setRsvpStatus(e.target.value)} />
                    <span>Not Attending</span>
                </label>
                <br />
                <label>
                    <input name="group1" type="radio" value="undecided" onChange={e => setRsvpStatus(e.target.value)} />
                    <span>Undecided</span>
                </label>
                <br />
                <label>
                    <input name="group1" type="radio" value="attending" onChange={e => setRsvpStatus(e.target.value)} />
                    <span>Attending</span>
                </label>
            </div>
            <div className="switch">
                <p>Are you bringing a guest?</p>
                <br />
                <label>
                    No
                    <input type="checkbox" value={plusOne} onChange={() => setPlusOne(!plusOne)} />
                    <span className="lever"></span>
                    Yes
                </label>
            </div>
            <br />
            <br />
            <div>
                <p for="textarea1">Leave a Message</p>
                <textarea id="textarea1" className="materialize-textarea" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    )

}

export default RSVPForm