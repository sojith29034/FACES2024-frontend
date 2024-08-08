import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/landingPage/LandingPage';
import AboutFaces from './pages/aboutFaces/AboutFaces';
import EventCards from './pages/eventCards/EventCards';
import IndividualCard from './pages/individualCard/IndividualCard';
import Profile from './pages/profile/Profile';

function App() {
  // const [count, setCount] = useState(0)

  // eslint-disable-next-line react/prop-types
  const Mainframe = ({element}) => {
    return (
    <>
      <Navbar/>
      {element}
      <Footer/>
    </>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Mainframe element={<LandingPage/>} />}/>
        <Route path='/aboutFaces' element={<Mainframe element={<AboutFaces/>} />}/>
        <Route path='/eventCards' element={<Mainframe element={<EventCards/>} />}/>
        <Route path='/individualCard' element={<Mainframe element={<IndividualCard />} />} />
        <Route path='/profile' element={<Mainframe element={<Profile/>} />}/>
      </Routes>
    </Router>
  )
}

export default App
