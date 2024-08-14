import { useState, useEffect } from 'react';
import { getEventDetails } from '../../api';
import { useParams } from 'react-router-dom';
import './IndividualCard.css';
import Sponsors from '../../components/Sponsors';

const IndividualCard = () => {
  const [rollNumbers, setRollNumbers] = useState([]);
  const [newRollNumber, setNewRollNumber] = useState('');
  const { eventCode } = useParams();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventData = await getEventDetails(eventCode);
        setEventData(eventData.data.event); // Set the correct event data
        console.log(eventData.data.event); // Log to inspect the structure
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
  
    fetchEvents();
  }, [eventCode]);

  if (!eventData) return <div>Loading...</div>;

  const handleAddRollNumber = () => {
    if (/^\d{7}$/.test(newRollNumber)) {
      if (rollNumbers.includes(newRollNumber)) {
        alert('This roll number has already been added.');
      } else if (rollNumbers.length < eventData.max_seats) { // Use max_seats from event data
        setRollNumbers([...rollNumbers, newRollNumber]);
        setNewRollNumber('');
      } else {
        alert('All seats are filled.');
      }
    } else {
      alert('Please enter a valid 7-digit roll number.');
    }
  };

  return (
    <>
      <div className="event-card">
        <div className="left-section">
          <div className="event-image">
            <img src={eventData.image || "src/assets/football.jpg"} alt={eventData.title || "Event"} />
          </div>
          <div className="seats-info">
            <b>Seats: {eventData.max_seats - rollNumbers.length}/{eventData.max_seats}</b>
          </div>
          <div className="roll-number-input">
            <input
              type="text"
              placeholder="Roll no"
              value={newRollNumber}
              onChange={(e) => setNewRollNumber(e.target.value)}
            />
            <button onClick={handleAddRollNumber}>Add</button>
          </div>
          <div className="roll-number-list-container">
            <div className="roll-number-list">
              {rollNumbers.map((roll, index) => (
                <div key={index} className="roll-number">{roll}</div>
              ))}
            </div>
          </div>
          <button className="join-button">Join</button>
        </div>
        <div className="right-section">
          <div className="title">
            <span className="big-bold-text">{eventData.title}</span>
          </div>
          <div className="event-details">
            <p>
              Day: {eventData.day}<br />
              Time: {eventData.start} - {eventData.end}<br />
              Venue: {/* Add venue if available */}<br />
              Price: {eventData.entry_fee}/-
            </p>
          </div>
          <p className="event-description">
            {eventData.description}
          </p>
        </div>
      </div>
      <Sponsors />
    </>
  );
};

export default IndividualCard;
