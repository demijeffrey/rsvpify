import { useContext, useState } from "react"
import { UserContext } from "../context/user"

function InvitationForm({ event, addGuest, inviteFormFlag, setInviteFormFlag }) {

    const {user} = useContext(UserContext)

    const [selectedGuests, setSelectedGuests] = useState([])

    const displayContacts = user.guests.map(guest => {
        return <p key={guest.id}>
            <label>
                <input type="checkbox" onChange={() => handleChange(guest)} />
                <span>{guest.first_name} {guest.last_name}</span>
            </label>
        </p>
    })

    function handleChange(guest) {
        setSelectedGuests(prevSelectedGuests => {
            if(prevSelectedGuests.includes(guest)) {
                return prevSelectedGuests.filter(id => id !== guest)
            } else {
                return [...prevSelectedGuests, guest]
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(selectedGuests)
        fetch(`/events/${event.id}/create_invitation`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({guest_ids: selectedGuests.map(guest => guest.id)})
        })
        .then(res => {
            if(res.ok) {
                console.log('Invitations sent successfully!')
                addGuest(selectedGuests)
                setInviteFormFlag(!inviteFormFlag)
            } else {
                console.log('Error sending invitations.')
            }
        })
    }

    return (
        <form onSubmit={e => handleSubmit(e)} action="#">
            {displayContacts}
            <button type="submit">Submit</button>
        </form>
    )

}

export default InvitationForm