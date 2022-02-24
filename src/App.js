import React from 'react';
import { AuthContainer } from './components/authComponent/authContainer';
import {HotelContainer} from './components/hotelComponet/hotelContainer';
import { VoteContainer } from './components/voteComponent/voteContainer';
import "./index.css";
//import { ServiceContainer } from './components/serviceComponent/serviceContainer';
const App = ()=> {
  return (
    <div className="app">
      <AuthContainer/>
      <p>Hello</p>
      <HotelContainer/>
      <VoteContainer/>
    </div>
  );
}

export default App;
