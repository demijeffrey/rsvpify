import { useState } from "react"

function DeleteContacts({ removeFormFlag, setRemoveFormFlag, contacts, removeContacts }) {

    const [allContacts, setAllContacts] = useState(contacts)

    function handleContactRemoval(c) {
        fetch(`/guests/${c.id}`, {
            method:'DELETE'
        })
        setAllContacts(allContacts.filter(contact => contact.id !== c.id))
        removeContacts(c)
    }

    return(
        <div className="row">
            <h5 className="black-text center">
            Manage Contact List
            </h5>
            {allContacts.map(c => {
                return (
                    <h6 key={c.id}>{c.first_name} {c.last_name}  <button onClick={() => handleContactRemoval(c)}>x</button></h6>
            )})} 
            <a className="waves-effect waves-light btn-small center" onClick={() => setRemoveFormFlag(!removeFormFlag)}>Done</a>            
        </div>
    )

}

export default DeleteContacts