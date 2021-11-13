import './App.css';
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "Mario's Birthday Bash", id: 1},
    {title: "Bowser's Live Stream", id: 2},
    {title: "Race on Moo Moo Farm", id: 3}
  ])

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className="App">
      <Title title = "Events in your area" subtitle = "subtitle"/>
      <Title title = "another title" subtitle = "another subtitle"/>
      {showEvents && (<div>
        <button onClick = {() => setShowEvents(false)}>Hide Events</button>
      </div>)}
      {!showEvents && (<div>
        <button onClick = {() => setShowEvents(true)}>Show Events</button>
      </div>)}
      {showEvents && <EventList handleClick={handleClick} events={events}/>}
      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>
      {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
        <NewEventForm /></Modal>}
    </div>
  );
}

export default App;
