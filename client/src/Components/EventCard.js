import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { format } from 'date-fns'

function EventCard(event) {

    const [image, setImage] = useState("https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg")
    
    const navigate = useNavigate()

    const date = new Date(event.event.date.substring(0, 10));
    const formattedDate = format(date, 'MM-dd-yyyy');

    // console.log(event.event.id)

    function handleDetailClick() {
        navigate('/event', { state: { event }})
    }

    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src={event.event.photo_url || image} />
                        <span className="card-title black">{event.event.name}</span>
                    </div>
                    <div className="card-content">
                        <p>{event.event.description}</p>
                        <h6>{formattedDate}</h6>
                    </div>
                    <div className="card-action">
                        <a onClick={handleDetailClick}>Event Details</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default EventCard