import { useContext, useState } from "react"
import { format } from 'date-fns'
import { UserContext } from "../context/user"

function EditEvent({ event, formFlag, setFormFlag, setCurrentEvent }) {

  console.log(event)

  const { updateUserEvent } = useContext(UserContext)

  const [name, setName] = useState(event.name)
  const [description, setDescription] = useState(event.description)
  const [location, setLocation] = useState(event.location)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [photoURL, setPhotoURL] = useState(event.photo_url)

  function handleSubmit(e) {
    e.preventDefault()

    const clientDate = new Date(`${date}T${time}`);
    const timezoneOffset = clientDate.getTimezoneOffset();
    const serverDate = new Date(clientDate.getTime() + timezoneOffset * 60000);
    const formatDate = serverDate.toISOString().slice(0, 10);
    const formatTime = format(new Date(`1970-01-01T${time}`), 'hh:mm a');

    fetch('/events', {
      method: 'PATCH',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        name: name,
        description: description,
        location: location,
        date: formatDate,
        time: formatTime,
        photo_url: photoURL,
        id: event.id
      })
    })
    .then(res => res.json())
    .then(data => {
      setFormFlag(!formFlag)
      setCurrentEvent(data)
      updateUserEvent(data)
    })
  }

    return (
      <div>
        <h3 className="center">Edit Event Details</h3>
        <div className="row container">
          <form className="col s12" onSubmit={e => handleSubmit(e)}>
            <div className="row">
              <div className="input-field col s6">
                <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
                {/* <label>Event Name</label> */}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="description" className="materialize-textarea" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                {/* <label>Event Description</label> */}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="location" type="text" value={location} onChange={e => setLocation(e.target.value)} />
                {/* <label>Event Location</label> */}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="date" type="date" value={date} onChange={e => setDate(e.target.value)} />
                <label>Event Date</label>
            </div>
          </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="time" type="time" value={time} onChange={e => setTime(e.target.value)} />
                <label>Event Time</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="photo" type="text" value={photoURL} onChange={e => setPhotoURL(e.target.value)} />
                {/* <label>Event Photo URL</label> */}
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )

}

export default EditEvent