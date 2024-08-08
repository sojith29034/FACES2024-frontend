import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0E535F]">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Hamburger Menu Button (Hidden on Desktop) */}
        <div className="text-black text-xl font-bold align-middle md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="text-white text-lg font-inter font-normal">
          UMANG {/* Replace "MyLogo" with your actual logo */}
        </div>

        {/* Navbar Links (Visible on Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white text-lg hover:bg-[#0E535F] py-2">
            Home
          </Link>
          <Link to="/aboutFaces" className="text-white text-lg hover:bg-[#0E535F] py-2">
            About Faces
          </Link>
          <Link to="/eventCards" className="text-white text-lg hover:bg-[#0E535F] py-2">
            Event Cards
          </Link>
          <Link to="/individualCard" className="text-white text-lg hover:bg-[#0E535F] py-2">
            Individual Card
          </Link>
          <Link to="/profile" className="text-white text-lg hover:bg-[#0E535F] py-2">
            Profile
          </Link>
        </div>
      </div>

      {/* Dropdown Menu (Visible on Mobile) */}
      <div className='bg-[#032A33] w-full'>
        <div className={`mt-2 ${isOpen ? 'block' : 'hidden'} md:hidden text-center m-4`}>
          <Link to="/" onClick={toggleMenu} className="block text-white px-2 py-2 text-lg hover:bg-[#0E535F] border-b-2">
            Home
          </Link>
          <Link to="/aboutFaces" onClick={toggleMenu} className="block text-white px-2 py-2 text-lg hover:bg-[#0E535F] border-b-2">
            About Faces
          </Link>
          <Link to="/eventCards" onClick={toggleMenu} className="block text-white px-2 py-2 text-lg hover:bg-[#0E535F] border-b-2">
            Event Cards
          </Link>
          <Link to="/individualCard" onClick={toggleMenu} className="block text-white px-2 py-2 text-lg hover:bg-[#0E535F] border-b-2">
            Individual Card
          </Link>
          <Link to="/profile" onClick={toggleMenu} className="block text-white px-2 py-2 text-lg hover:bg-[#0E535F] border-b-2">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
