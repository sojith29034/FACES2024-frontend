import React from "react";
import myImage from "./images/firstimage.png"; // Importing the image

// import './App.css';

function App() {
  return (
    <div className="body">
      <div className="navbar">UMANG</div>
      {/* since navbar & footer are already made i have just created a dummy div for it */}
      <div className="blob1"></div>
      <img className="umang" src={myImage} alt="My Local Image" />
      <div className="about-umang">
        <h2>About Umang</h2>
        <p>
          about umang : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum ultricies libero ex, non porttitor est auctor vitae. Proin
          vestibulum malesuada urna ut euismod. Donec eget ullamcorper sapien,
          id posuere neque. Ut leo augue, semper sit amet gravida ac, hendrerit
          facilisis mauris. Sed tincidunt sed lectus sed rutrum.
        </p>
      </div>
      <div className="blob2"></div>
      <div className="frame"></div>
      <div>
        <p>dummy1</p>
        <p>dummy2</p>
      </div>
      <div className="blob1"></div>
      <img className="faces" src={myImage} alt="My Local Image" />
      <div className="about-faces">
        <h2>About Faces</h2>
        <p>
          about faces : fLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Vestibulum ultricies libero ex, non porttitor est auctor vitae.
          Proin vestibulum malesuada urna ut euismod. Donec eget ullamcorper
          sapien, id posuere neque. Ut leo augue, semper sit amet gravida ac,
          hendrerit facilisis mauris. Sed tincidunt sed lectus sed rutrum.
        </p>
      </div>
      <div className="blob2"></div>
      <div className="footer">
        <h2>Fr. C. Rodrigues Institute of Technology</h2>
        <h6>
          Agnel Technical Education Complex, Sector 9-A, Vashi, Navi Mumbai,
          Maharashtra, India, Pin - 400703
        </h6>
      </div>
    </div>
  );
}

export default App;
