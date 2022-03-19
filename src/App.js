import AboutComponent from './components/authComponent/aboutComponent/aboutComonent';
import AuthContainer from './components/authComponent/authContainer';
import HotelContainer from './components/hotelComponet/hotelContainer';
import './index.css';

const App = () => (
  <div className="app">
    <AuthContainer />
    <AboutComponent />
    <HotelContainer />
  </div>
);

export default App;
