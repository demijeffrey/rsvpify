import { useContext, useState } from "react"
import { format } from 'date-fns'
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/user"


function NewEvent() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [photoURL, setPhotoURL] = useState('')
  const [error, setError] = useState('')
  const [errors, setErrors] = useState('')

  const {addUserEvent} = useContext(UserContext)

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    if (!date || !time) {
      setError("Please enter both date and time.");
      return;
    }
    
    const clientDate = new Date(`${date}T${time}`);
    const timezoneOffset = clientDate.getTimezoneOffset();
    const serverDate = new Date(clientDate.getTime() + timezoneOffset * 60000);
    const formattedDate = serverDate.toISOString().slice(0, 10);
    const formattedTime = format(new Date(`1970-01-01T${time}`), 'hh:mm a');

    fetch('/events', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        name: name,
        description: description,
        location: location,
        date: formattedDate,
        time: formattedTime,
        photo_url: photoURL
      })
    })
    .then(res => {
      if(res.ok) {
          res.json().then(data => {
            addUserEvent(data)
            navigate('/')
          })
      } else {
          res.json().then(data => {
            console.log(data)
            setErrors(data.errors.map(error => <p key={error.error}>{error}</p>))
          })
      }
  })
  }

    return (
      <div>
        <h1 className="center">Create New Event</h1>
        <div className="row container">
          <form className="col s12" onSubmit={e => handleSubmit(e)}>
            <div className="row">
              <div className="input-field col s6">
                <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
                <label>Event Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="description" className="materialize-textarea" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                <label>Event Description</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="location" type="text" value={location} onChange={e => setLocation(e.target.value)} />
                <label>Event Location</label>
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
                <label>Event Photo URL</label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
          {error}
          {errors}
        </div>
      </div>
    )

}

export default NewEvent