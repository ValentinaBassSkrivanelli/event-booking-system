import { useState } from "react";

function BookingForm({ addEvent }) {

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");

        function handleSubmit(event) {

        event.preventDefault();

        addEvent({
            title,
            date,
            location
        });

        setTitle("");
        setDate("");
        setLocation("");
    }

    
    return (

        <form onSubmit={handleSubmit}>

            <h2>Add New Event</h2>

            <input
                type="text"
                placeholder="Event title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />

            <br /><br />

            <button type="submit">Add Event</button>

        </form>

    );

}

export default BookingForm;