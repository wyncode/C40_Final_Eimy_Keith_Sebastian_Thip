import React from 'react';
import './Body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTruckMoving } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';

function HomeBody() {
  return (
    <>
      <div className="body">
        <ul>
          <li className="buyBody">
            <div className="buyIcon">
              <FontAwesomeIcon icon={faHome} size="10x" />
            </div>

            <div className="buyContent">Buy</div>
          </li>
          <li className="rentBody">
            <div className="rentIcon">
              <FontAwesomeIcon icon={faTruckMoving} size="10x" />
            </div>
            <div className="rentContent">Rent</div>
          </li>
          {/* <li className="communityBody">
            <div className="communityIcon">
              <FontAwesomeIcon icon={faUsers} size="10x" />
            </div>
            <div className="communityContent">Community</div>
          </li> */}
          <li className="manageBody">
            <div className="manageIcon">
              <FontAwesomeIcon icon={faTools} size="10x" />
            </div>
            <div className="manageContent">Manage</div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomeBody;
