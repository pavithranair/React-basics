import "./NewEventForm.css"

export default function NewEventForm(){
    return(
        <form className="new-event-form"> 
            <label>
                <span>Event title: </span>
                <input type = "text" />
            </label>
            <label>
                <span>Event date: </span>
                <input type = "date" />
            </label>
            <button>Submit</button>
        </form>
    )
}