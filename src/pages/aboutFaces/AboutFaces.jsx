import './AboutFaces.css';
import Umang from '../../assets/umang.png';
import myImage from "../../assets/finalimage.png"; // Importing the image


const AboutFaces = () => {
  return (
    <div className="body">
    {/* <div className="blob1"></div>        */}
    {/* <div className="blob1D"></div> */}
    {/* <img className="umangM" src={myImage} alt="My Local Image" /> */}
    {/* <img className="umangD" src={myImage1} alt="My Local Image" /> */}
    {/* <div className="blob2"></div> */}
    {/* <div className="blob2D"></div> */}
    <div className="umang-section">
      <img className="umang" src={myImage} alt="My Local Image" />
      <div className="about-umang">
        <h2>About Umang</h2>
        <p>
          about umang : Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Vestibulum ultricies libero ex, non porttitor est auctor
          vitae. Proin vestibulum malesuada urna ut euismod. Donec eget
          ullamcorper sapien, id posuere neque. Ut leo augue, semper sit amet
          gravida ac, hendrerit facilisis mauris. Sed tincidunt sed lectus sed
          rutrum.
        </p>
      </div>
    </div>
    <div className="frame"></div>
    {/* <div className="dummy">
      <p>dummy1</p>
      <p>dummy2</p>
    </div> */}
    {/* <div className="blob1M"></div> */}
    {/* <img className="facesD" src={myImage1} alt="My Local Image" /> */}
    {/* <div className="blob2M"></div> */}
    {/* <div className="blob3D"></div> */}
    <div className="faces-section">
      <img className="faces" src={myImage} alt="My Local Image" />
      <div className="about-faces">
        <h2>About faces</h2>
        <p>
          about faces : Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Vestibulum ultricies libero ex, non porttitor est auctor
          vitae. Proin vestibulum malesuada urna ut euismod. Donec eget
          ullamcorper sapien, id posuere neque. Ut leo augue, semper sit amet
          gravida ac, hendrerit facilisis mauris. Sed tincidunt sed lectus sed
          rutrum.
        </p>
      </div>
    </div>
    
  </div>
  );
};

export default AboutFaces;
