import { useState, useEffect } from "react";
import Header from "./components/Header";
import EventCard from "./components/EventCard";
import BookingForm from "./components/BookingForm";

function App() {

 const [events, setEvents] = useState(() => {

  const storedEvents = localStorage.getItem("events");

  if (storedEvents) {
    return JSON.parse(storedEvents);
  }

  return [
    {
      id: 1,
      title: "1.1 MSA",
      date: "July 30, 2026",
      location: "Remote - Teams",
      booked: false
    },
    {
      id: 2,
      title: "1.1 Weekly Meeting",
      date: "July 27, 2026",
      location: "Remote - Teams",
      booked: false
    },
    {
      id: 3,
      title: "Career Development",
      date: "August 10, 2026",
      location: "Remote - Teams",
      booked: false
    }
  ];

});


  // Save events to localStorage
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  function addEvent(newEvent) {

    const event = {
      id: events.length + 1,
      booked: false,
      ...newEvent
    };

    setEvents([...events, event]);
  }

  function deleteEvent(id) {

    const updatedEvents = events.filter(
      (event) => event.id !== id
    );

    setEvents(updatedEvents);
  }

  function toggleBooking(id) {

    const updatedEvents = events.map((event) => {

      if (event.id === id) {

        return {
          ...event,
          booked: !event.booked
        };

      }

      return event;

    });

    setEvents(updatedEvents);
  }

  return (
    <>
      <Header />

      <BookingForm addEvent={addEvent} />

      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          booked={event.booked}
          onDelete={deleteEvent}
          onToggleBooking={toggleBooking}
        />
      ))}
    </>
  );
}

export default App;