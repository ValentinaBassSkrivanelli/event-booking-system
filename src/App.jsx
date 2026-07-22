import Header from "./components/Header";
import EventCard from "./components/EventCard";

function App() {
  return (
    <>
      <Header />
      #creating the event cards for the events using props
      <EventCard 
      title="1.1 MSA" 
      date="July 30, 2026" 
      location="Remote - Teams" />
  
    <EventCard 
      title="1.1 Weekly Meeting"
      date="July 27, 2026" 
      location="Remote - Teams" />
  
      <EventCard
       title=" Career Development"
      date="August 10, 2026"
      location="Remote - Teams"  />
      
    </>

  );
}

export default App;