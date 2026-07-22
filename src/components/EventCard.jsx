//creating a new component called EventCard

function EventCard(props) { 
    return (
        <div className="event-card">
            <h2>{props.title}</h2>    
            <p>Date: {props.date}</p>
            <p>Location: {props.location}</p>
            <button>Book Meeting</button>
        </div>

        
    );
}

export default EventCard;