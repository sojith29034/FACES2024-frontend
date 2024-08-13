import '../profile/profile.css';

const Profile = () => {
  return (
    <div>
      <div className="container">
        <div className="profile">
          <img src="src\assets\image.png" alt="Profile Image" className="profile-img" />
          <div className="user-info">
            <h2 className="name">Name Name</h2>
            <p className="rollno">rollno</p>
          </div>
        </div>
        <h1 className="dashboard-title">DASHBOARD</h1>
        <div className="event-list">
          <div className="event-item">
            <span className="event-name">event name</span>
            <span className="event-price">price</span>
            <span className="event-status">status</span>
          </div>
          {/* Repeat the above block for each event */}
        </div>
        <div className="checkout">
          <h2 className="checkout-title">CHECKOUT</h2>
          <div className="checkout-form">
            <input type="text" className="roll-input" placeholder="Roll No." />
            <button type="submit" className="submit-btn">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
