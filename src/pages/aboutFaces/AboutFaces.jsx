import './AboutFaces.css';
import Umang from '../../assets/umang.png';
import myImage from "../../assets/finalimage.png"; // Importing the image
import Sponsors from '../../components/Sponsors';


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
        “Umang” is a Hindi word that encapsulates the essence of boundless enthusiasm and excitement.
Umang is not just a fleeting emotion but a deep-seated drive that inspires people to pursue their dreams and embrace life's experiences with an open heart.
When enthusiasm meets the sportsmanship spirit, every match is an opportunity to grow, to push our limits, and to embrace the thrill of competition. True victory lies in the spirit of participation.
So, let's come together for this exciting sports event that fills you with boundless UMANG and joy !!
        </p>
      </div>
    </div>
    <div>
      <Sponsors />
    </div>
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
