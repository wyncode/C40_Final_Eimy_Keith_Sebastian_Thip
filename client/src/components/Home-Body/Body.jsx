import React from 'react';
import './Body.css';
import BuyIcon from '../../Assests/buyIcon.png';
import RentIcon from '../../Assests/rentIcon.png';
import ManageIcon from '../../Assests/manageIcon.png';

function HomeBody() {
  return (
    <>
      <div className="body">
        <ul>
          <li className="buyBody">
            <div className="buyIcon">
              <img src={BuyIcon} alt="Buy Icon"></img>
            </div>
            <div className="buyContent">Buy</div>
            <p>
              Achieve an immersive experience through many listings that we have
              available. Make any house become a place you will want to call
              home.{' '}
            </p>
          </li>
          <li className="rentBody">
            <div className="rentIcon">
              <img src={RentIcon} alt="Rent Icon"></img>
            </div>
            <div className="rentContent">Rent</div>
            <p>
              Just as important as buying, find the right place to rent that
              exceeds your standards.. a place that you also would want to call
              home.
            </p>
          </li>
          {/* <li className="communityBody">
            <div className="communityIcon">
              <FontAwesomeIcon icon={faUsers} size="10x" />
            </div>
            <div className="communityContent">Community</div>
          </li> */}
          <li className="manageBody">
            <div className="manageIcon">
              <img src={ManageIcon} alt="Manage Icon"></img>
            </div>
            <div className="manageContent">Manage</div>
            <p>
              Purchasing a home doesn't just stop there. Your home is a place
              that you want to nourish and we have just the right experts to
              assist you.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomeBody;
