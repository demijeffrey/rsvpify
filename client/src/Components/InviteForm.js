import { useState } from "react"

function InviteForm({ event }) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    console.log(event)

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/guests', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                event_id: event.id
            })
        })
    }

    return (
        <div className="row">
            <form className="col s12" onSubmit={e => handleSubmit(e)}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" />
                        <label>First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="last_name" type="text" />
                        <label>Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="text" />
                        <label>Email</label>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
      </div>
    )

}

export default InviteForm