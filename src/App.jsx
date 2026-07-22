//Save info / save info when something happend
import { useState, useEffect} from "react";
import Header from "./components/Header";
import EventCard from "./components/EventCard";
import BookingForm from "./components/BookingForm";

function App() {
   //creating the event cards for the events using props
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "1.1 MSA",
      date: "July 30, 2026",
      location: "Remote - Teams",
      //Each event will have a variable indicating whether it was booked.
      booked: false
    },
    {   
      id: 2,
      title: "1.1 Weekly Meeting",
      date: "July 27, 2026",
      location: "Remote - Teams",
      //Each event will have a variable indicating whether it was booked.
      booked: false
    },
    {
      id: 3,
      title: "Career Development",
      date: "August 10, 2026",
      location: "Remote - Teams",
      //Each event will have a variable indicating whether it was booked.
      booked: false
    }
  ]);
  
  function addEvent(newEvent) {
    const event = {
      id: events.length + 1,
      ...newEvent
    };
    setEvents([...events, event]);
  }

  function deleteEvent(id) {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  }

  function toggleBooking(id) {
    const updatedEvents = events.map((event) => {
      if (event.id === id) {
        return { ...event, booked: !event.booked };
      }
      return event;
    });
    setEvents(updatedEvents);
  }


  return (
    <>
      <Header />
       <BookingForm addEvent={addEvent} />
      {/* Iterate through the events array and create an EventCard for each event */}
      {events.map((event) => (
        <EventCard
          key={event.id}
          tit
          le={event.title}
          date={event.date}
          location={event.location}
          id={event.id}
          booked={event.booked}
          onDelete={deleteEvent}
          onToggleBooking={toggleBooking}
        />
      ))}
    </>
  );
}

export default App;