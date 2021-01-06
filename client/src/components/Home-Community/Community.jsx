import React from 'react';
import Community from './Community.css';
import { motion } from 'framer-motion';
import WashingtonDC from '../../Assests/washington.png';
import LosAngeles from '../../Assests/los-angeles.png';
import Atlanta from '../../Assests/atlanta.png';
import Boston from '../../Assests/boston.png';
import Chicago from '../../Assests/chicago.png';
import Denver from '../../Assests/denver.png';
import Hollywood from '../../Assests/hollywood.png';
import LasVegas from '../../Assests/las-vegas.png';
import Miami from '../../Assests/miami.png';
import Minneapolis from '../../Assests/minneapolis.png';
import NewOrleans from '../../Assests/new-orleans.png';
import NewYork from '../../Assests/new-york-city.png';
import SanDiego from '../../Assests/san-diego.png';
import SanFrancisco from '../../Assests/san-francisco.png';
import StLouis from '../../Assests/st-louis.png';

function HomeCommunity() {
  return (
    <>
      <h1 className="CommunityHeader">Search your new community</h1>
      <img className="CommunityImage" src={WashingtonDC} alt="Washington DC" />
      <img className="CommunityImage" src={LosAngeles} alt="Los Angeles" />
      <img className="CommunityImage" src={StLouis} alt="St Louis" />
      <img className="CommunityImage" src={NewOrleans} alt="New Orleans" />
      <img className="CommunityImage" src={Miami} alt="Miami" />
      <img className="CommunityImage" src={Boston} alt="Boston" />
      <img className="CommunityImage" src={Atlanta} alt="Atlanta" />
      <img className="CommunityImage" src={SanFrancisco} alt="San Francisco" />
      <img className="CommunityImage" src={SanDiego} alt="San Diego" />
      <img className="CommunityImage" src={LasVegas} alt="Las Vegas" />
      <img className="CommunityImage" src={Minneapolis} alt="Minneapolis" />
      <img className="CommunityImage" src={Chicago} alt="Chicago" />
      <img className="CommunityImage" src={Denver} alt="Denver" />
      <img className="CommunityImage" src={Hollywood} alt="Hollywood" />
      <img className="CommunityImage" src={NewYork} alt="New York" />
    </>
  );
}

export default HomeCommunity;
