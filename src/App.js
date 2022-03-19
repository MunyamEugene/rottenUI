import AuthContainer from './components/authComponent/authContainer';
import HotelContainer from './components/hotelComponet/hotelContainer';
import VoteContainer from './components/voteComponent/voteContainer';
import './index.css';
import AboutComponent from './components/authComponent/aboutComponent/aboutComonent';

const App = () => (
  <div className="app">
    <AuthContainer />
    <AboutComponent />
    <HotelContainer />
    <VoteContainer />
  </div>
);

export default App;
