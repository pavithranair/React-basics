import React from "react"

export default function EventList({events, handleClick}) {
    return (
        <div>
        {events.map((event, index) => (
        <React.Fragment key= {event.id}>
          <h2>{event.title}</h2>
          <button onClick = {() => handleClick(event.id)}>Delete Me!</button>
        </React.Fragment>))}
        </div>
        )
}