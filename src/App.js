import './App.css';
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      setEvents([...prevEvents, event])
    })
    setShowModal(false)
  }

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
        <NewEventForm addEvent={addEvent}/></Modal>}
    </div>
  );
}

export default App;
