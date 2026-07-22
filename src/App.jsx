import { useState } from "react";
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
      location: "Remote - Teams"
    },
    {   
      id: 2,
      title: "1.1 Weekly Meeting",
      date: "July 27, 2026",
      location: "Remote - Teams",
    },
    {
      id: 3,
      title: "Career Development",
      date: "August 10, 2026",
      location: "Remote - Teams"
    }
  ]);
  
  function addEvent(newEvent) {
    const event = {
      id: events.length + 1,
      ...newEvent
    };
    setEvents([...events, event]);
  }
  return (
    <>
      <Header />
      <BookingForm onAddEvent={addEvent} />
      {/* Iterate through the events array and create an EventCard for each event */}
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
        />
      ))}
    </>
  );
}

export default App;