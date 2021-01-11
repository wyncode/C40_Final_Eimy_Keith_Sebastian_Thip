import React, { useEffect, useState } from 'react';
import './Community.css';
import axios from 'axios';
import MyMapComponent from '../../components/GoogleMap/GoogleMap';
import Schools from '../../components/School/School';
import Realtor from '../../components/Realtor/Realtor';
import Grocery from '../../Assests/grocery.png';
import Night from '../../Assests/night.png';
import Paw from '../../Assests/paw.png';
import Quietness from '../../Assests/quietness.png';
import Restaurant from '../../Assests/restaurant.png';
import Sidewalks from '../../Assests/sidewalk.png';
import StreetLights from '../../Assests/street-light.png';
import Thumb from '../../Assests/thumbs.png';
import Avatar from '../../Assests/avatar.png';
// import BootstrapCarousel from '../../components/Bootstrap/Bootstrap';

function Community() {
  const [mapKey, setMapKey] = useState();
  const getMapKey = async () => {
    const data = await axios.get('api/communities/map');
    console.log(data.data.key);
    setMapKey(data.data.key);
  };
  useEffect(getMapKey, []);

  return (
    <>
      <div className="communityPage">
        <h1 className="Overview">Community Overview</h1>
      </div>
      <MyMapComponent mapKey={mapKey} />
      <div className="LocalsContent">
        <h1 className="LocalsSay">What Locals Say</h1>
        <div className="SayThings">
          <div className="ThumbContent">
            <img className="LocalIcon" src={Thumb} alt="Icon"></img>
            <p className="ThumbRate">89%</p>
          </div>
          <div className="OneContent">
            <img className="LocalIcon" src={Sidewalks} alt="Icon"></img>
            <p className="pIcon">Sidewalks</p>
          </div>
          <div className="ThumbContent">
            <img className="LocalIcon" src={Thumb} alt="Icon"></img>
            <p className="ThumbRate">87%</p>
          </div>
          <div className="OneContent">
            <img className="LocalIcon" src={Paw} alt="Icon"></img>
            <p className="pIcon">Pet Friendly</p>
          </div>
          <div className="ThumbContent">
            <img className="LocalIcon" src={Thumb} alt="Icon"></img>
            <p className="ThumbRate">83%</p>
          </div>
          <div className="OneContent">
            <img className="LocalIcon" src={Restaurant} alt="Icon"></img>
            <p className="pIcon">Restaurants</p>
          </div>
        </div>
        <div className="SayThings">
          <div className="ThumbContentTwo">
            <img className="LocalIcon" src={Thumb} alt="Icon"></img>
            <p className="ThumbRate">78%</p>
          </div>
          <div className="GroceryContent">
            <img className="LocalIcon" src={Grocery} alt="Icon"></img>
            <p className="pIcon">Grocery Stores</p>
          </div>
          <div className="SayThingsTwo">
            <div className="ThumbContent">
              <img className="LocalIcon" src={Thumb} alt="Icon"></img>
              <p className="ThumbRate">72%</p>
            </div>
            <div className="OneContent">
              <img className="LocalIcon" src={StreetLights} alt="Icon"></img>
              <p className="pIcon">Street Lights</p>
            </div>
          </div>
          <div className="SayThingsThree">
            <div className="ThumbContent">
              <img className="LocalIcon" src={Thumb} alt="Icon"></img>
              <p className="ThumbRate">68%</p>
            </div>
            <div className="OneContent">
              <img className="LocalIcon" src={Quietness} alt="Icon"></img>
              <p className="pIcon">Quietness</p>
            </div>
          </div>
        </div>
        <h3 className="LocalsMore">More</h3>
        {/* <div className="CommunityCards">
          <img className="Avatar" src={Avatar} alt="Avatar Icon"></img>
          <h3>John Doe</h3>
          <p>Resident</p>
          <p>2 months ago</p>
          <p></p>
        </div> */}
      </div>
      {/* <BootstrapCarousel></BootstrapCarousel> */}
      <Schools></Schools>
      <Realtor></Realtor>
    </>
  );
}

export default Community;
