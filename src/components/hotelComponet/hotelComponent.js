import { useEffect, useState } from 'react';
import './css/hotel.css';
import RatedServices from './ratedServices/ratedServices';
import ShowTotalComponent from './ratedServices/showTotalComponent';
import SearchComponent from '../searchComponent/searchComponent';

const HotelComponent = ({ state, openPopup, fetchHotels }) => {
  const { userInfo, hotels } = state;
  const { email_verified } = userInfo;
  const [allHtl, setHtl] = useState(hotels);
  useEffect(() => {
    fetchHotels();
    // eslint-disable-next-line no-console
    console.log(hotels);
  }, [fetchHotels]);

  const handleOnBtnClick = (hotel) => {
    const rateHotel = { ...hotel };
    localStorage.setItem('hotel', JSON.stringify(rateHotel));
    openPopup(true);
  };

  const seachHotel = (name) => {
    const rslt = hotels.filter((hotel) => hotel.name.toLowerCase().includes(name.toLowerCase()));
    setHtl(rslt);
  };

  return (
    <div className="hotels">
      <SearchComponent search={seachHotel} />
      {(allHtl.length > 0 ? allHtl : hotels).map((hotel) => (
        <div key={hotel.id} className="hotel">
          <ShowTotalComponent hotel={hotel} />
          <RatedServices hotel={hotel} />
          {(email_verified) ? <button className="votebtn" onClick={() => handleOnBtnClick(hotel)}>What did you hate?</button> : ''}
        </div>
      ))}
    </div>
  );
};

export default HotelComponent;
