import { useLocation } from "react-router-dom"

function Event() {

    const {state} = useLocation()
    const {event} = state

    console.log(event.event)

    return (
        <div class="row">
            <div class="col s7 push-s5">
                <span class="flow-text">This div is 7-columns wide on pushed to the right by 5-columns.</span>
            </div>
            <div class="col s5 pull-s7">
                {/* <span class="flow-text">5-columns wide pulled to the left by 7-columns.</span> */}
                <img src={event.event.photo_url && "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg"} />
                <h4>{event.event.name}</h4>
            </div>
      </div>
    )

}

export default Event