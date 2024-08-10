import React, { useState } from 'react';
import './IndividualCard.css';
import footballImage from '../../assets/how-to-kick-a-football.jpg';

const IndividualCard = () => {
  const [rollNumbers, setRollNumbers] = useState(['1020235', '1020235', '1020235']);
  const [newRollNumber, setNewRollNumber] = useState('');
  const [seats, setSeats] = useState(10);

  const handleAddRollNumber = () => {
    if (newRollNumber) {
      setRollNumbers([...rollNumbers, newRollNumber]);
      setSeats(seats - 1);
      setNewRollNumber('');
    }
  };

  return (
    <div className="event-card">
      <div className="event-image">
        <img src={footballImage} alt="Football Event" />
      </div>
      <h2>FOOTBALL (MENS)</h2>
      <div className="event-details">
        <p>D a y<br />T i m e<br />V e n u e<br />P r i c e</p>
      </div>
      <p className="event-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies libero ex, non porttitor est auctor vitae. Proin vestibulum malesuada urna ut euismod. Donec eget ullamcorper sapien, id posuere neque. Ut leo augue, semper sit amet gravida ac, hendrerit facilisis mauris. Sed tincidunt sed lectus sed rutrum.
      </p>
      <div className="seats-info">Seats: {seats}/20</div>
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
  );
};

export default IndividualCard;
