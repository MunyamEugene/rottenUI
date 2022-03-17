import { useEffect, useState } from 'react';
import urls from '../../helper/urls';
import './popup.css';

const VoteComponent = ({
  state, closePopup, rateService, canselRate, saveRate, fetchServices,
}) => {
  const {
    popupModel, badservices, ratedService, userInfo,
  } = state;
  const { email } = userInfo;
  const [checkedBoxes, setChecks] = useState([]);
  useEffect(() => {
    fetchServices();
    setChecks(new Array(badservices.length).fill(false));
  }, [badservices.length, fetchServices]);

  const handleOnchecked = (pos) => {
    const updateChecks = checkedBoxes.map((item, index) => (index === pos ? !item : item));
    setChecks(updateChecks);
    if (!updateChecks[pos]) {
      canselRate(badservices[pos]);
    } else {
      rateService(badservices[pos]);
    }
  };

  const handleOnSaveRate = () => {
    const hotel = localStorage.getItem('hotel');
    const rate = {
      email,
      hotel: JSON.parse(hotel),
      badServices: [...ratedService],
    };
    saveRate(urls.vote, rate);
    localStorage.removeItem('hotel');
    closePopup(false);
  };

  const handleOnCansel = () => {
    localStorage.removeItem('hotel');
    closePopup(false);
  };

  return (popupModel.popup) ? (
    <div className="popup">
      <div className="popup-content">
        <div className="bad-service-list">
          {badservices.map((badservice, index) => (
            <div key={index} className="bad-service">

              {badservice.name}
              <input type="checkbox" onChange={() => handleOnchecked(index)} name={badservice.id} />
            </div>
          ))}

        </div>
        <div className="ctrlbtn">
          <button className="btn" onClick={handleOnCansel}>cansel</button>
          <button className="btn" onClick={handleOnSaveRate}>save</button>
        </div>
      </div>
    </div>
  ) : '';
};

export default VoteComponent;
