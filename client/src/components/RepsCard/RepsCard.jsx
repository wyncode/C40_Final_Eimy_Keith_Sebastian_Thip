import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import arrow from '../../assets/images/right-arrow.svg';
// import NoImage from '../../assets/images/NoProfileImage.png';
import { AppContext } from '../../context/AppContext';
// import './RepsCard.css';

const RepsCard = ({
  first_name,
  last_name,
  photo,
  party,
  position,
  level,
  rep
}) => {
  const name = `${first_name} ${last_name}`;
  const { repData } = useContext(AppContext);
  let ind_level;

  switch (level) {
    case 'STATE':
      ind_level = repData.match_region;
      break;
    case 'LOCAL':
      ind_level = repData.match_subregion;
      break;
    case 'NATIONAL':
      if (position === 'Senator' || position === 'Representative') {
        ind_level = repData.match_region;
      } else {
        ind_level = repData.match_country;
      }
      break;
    default:
      ind_level = repData.match_region;
      break;
  }

  return (
    <div className="repCard-container">
      <div className="repName-container">
        <h3>{name}</h3>
      </div>
      <div className="repInfo-container">
        {/* <div className="profile-photo">
                    <img src={photo ? photo : NoImage} alt="Profile" />
                </div> */}
        <div className="right-container">
          <h3 className="title-name">{position}</h3>
          <h3 className="county-name">{ind_level}</h3>
          <h3 className="party-name">{party ? party : 'Independent'}</h3>
        </div>
        <div className="arrow">
          <Link to={{ pathname: '/RepProfile', state: { pass: rep } }}>
            {/* <img src={arrow} alt="Profile" /> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RepsCard;
