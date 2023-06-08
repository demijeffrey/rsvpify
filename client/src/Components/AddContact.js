import { useContext, useState } from "react"
import { UserContext } from "../context/user"

function AddContactForm({ contactFormFlag, setContactFormFlag, contacts, setContacts }) {

    const { addUserContact } = useContext(UserContext)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [family, setFamily] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/guests', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                family: family
            })
        })
        .then(res => res.json())
        .then(data => {
            setContactFormFlag(!contactFormFlag)
            setContacts([...contacts, data])
            addUserContact(data)
        })
    }

    return (
        <div className="row">
            <form className="col s12" action="#" onSubmit={e => handleSubmit(e)}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" value={firstName} onChange={e => setFirstName(e.target.value)} type="text" />
                        <label>First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="last_name" value={lastName} onChange={e => setLastName(e.target.value)}  type="text" />
                        <label>Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" value={email} onChange={e => setEmail(e.target.value)}  type="text" />
                        <label>Email</label>
                    </div>
                </div>
                <div>Family?
                    <br />
                    <label>
                        <input name="group1" value={true} onChange={e => setFamily(e.target.value)} className="with-gap" type="radio" />
                        <span>Yes</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input name="group1" value={false} onChange={e => setFamily(e.target.value)} className="with-gap" type="radio" />
                        <span>No</span>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
      </div>
    )

}

export default AddContactForm