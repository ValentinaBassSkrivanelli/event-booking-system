//creating a new component called EventCard

function EventCard(props) { 
    return (
        <div className="event-card">
            <h2>{props.title}</h2>    
            <p>Date: {props.date}</p>
            <p>Location: {props.location}</p>
            <button onClick={() => props.onToggleBooking(props.id)}>
                {/* condition ? valueIfTrue : valueIfFalse */}
                {props.booked ? "View Booking" : "Book Meeting"}
            </button>
            <button onClick={() => props.onDelete(props.id)}> Delete</button>
        </div>

        
    );
}

export default EventCard;