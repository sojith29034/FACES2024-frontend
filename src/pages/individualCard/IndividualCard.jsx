import React, { useState } from 'react';
import './IndividualCard.css';
import footballImage from '../../assets/how-to-kick-a-football.jpg';

const IndividualCard = () => {
  const [rollNumbers, setRollNumbers] = useState([]);
  const [newRollNumber, setNewRollNumber] = useState('');
  const [seats, setSeats] = useState(20);

  const handleAddRollNumber = () => {
    if (/^\d{7}$/.test(newRollNumber)) {
      if (rollNumbers.includes(newRollNumber)) {
        alert('This roll number has already been added.');
      } else if (rollNumbers.length < seats) {
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
    <div className="event-card">
      <div className="left-section">
        <div className="event-image">
          <img src={footballImage} alt="Football Event" />
        </div>
      </div>
      <div className="right-section">
        <h2>FOOTBALL (MENS)</h2>
        <div className="event-details">
          <p>Day<br />Time<br />Venue<br />Price</p>
        </div>
        <p className="event-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies libero ex, non porttitor est auctor vitae. Proin vestibulum malesuada urna ut euismod. Donec eget ullamcorper sapien, id posuere neque. Ut leo augue, semper sit amet gravida ac, hendrerit facilisis mauris. Sed tincidunt sed lectus sed rutrum.
        </p>
        <div className="seats-info">Seats: {seats - rollNumbers.length}/{seats}</div>
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
    </div>
  );
};

export default IndividualCard;
