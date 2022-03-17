import { useEffect } from 'react';
import './css/hotel.css';
import RatedServices from './ratedServices/ratedServices';
import ShowTotalComponent from './ratedServices/showTotalComponent';

const HotelComponent = ({ state, openPopup, fetchHotels }) => {
  const { userInfo, hotels } = state;
  const { email_verified } = userInfo;

  useEffect(() => {
    fetchHotels();
  }, [fetchHotels]);

  const handleOnBtnClick = (hotel) => {
    const rateHotel = { ...hotel };
    localStorage.setItem('hotel', JSON.stringify(rateHotel));
    openPopup(true);
  };

  return (
    <div className="hotels">
      {hotels.map((hotel) => {
        const {
          services, name, stars, location,
        } = hotel;
        const totalVotes = services.reduce((strt, curr) => strt + curr.votes, 0);
        return (
          <div key={hotel.id} style={{ order: totalVotes }} className="hotel">
            <ShowTotalComponent total={totalVotes} name={name} location={location} stars={stars} />
            <RatedServices services={services} />
            {(email_verified) ? <button className="votebtn" onClick={() => handleOnBtnClick(hotel)}>What did you hate?</button> : ''}
          </div>
        );
      })}
    </div>
  );
};

export default HotelComponent;
