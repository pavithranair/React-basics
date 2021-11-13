import { useState } from "react/cjs/react.development"
import "./NewEventForm.css"

export default function NewEventForm(){
    const[title, setTitle] = useState('')
    const[date, setDate] = useState('')
    
    return(
        <form className="new-event-form"> 
            <label>
                <span>Event title: </span>
                <input type = "text" onChange= {(e) => setTitle(e.target.value)}/>
            </label>
            <label>
                <span>Event date: </span>
                <input type = "date" onChange= {(e) => setDate(e.target.value)}/>
            </label>
            <button>Submit</button>
            <p>title - {title}, date - {date}</p>
        </form>
    )
}