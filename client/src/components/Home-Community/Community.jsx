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
      <img src={WashingtonDC} alt="Washington DC" />
      <img src={LosAngeles} alt="Los Angeles" />
      <img src={StLouis} alt="St Louis" />
      <img src={NewOrleans} alt="New Orleans" />
      <img src={Miami} alt="Miami" />
      <img src={Boston} alt="Boston" />
      <img src={Atlanta} alt="Atlanta" />
      <img src={SanFrancisco} alt="San Francisco" />
      <img src={SanDiego} alt="San Diego" />
      <img src={LasVegas} alt="Las Vegas" />
      <img src={Minneapolis} alt="Minneapolis" />
      <img src={Chicago} alt="Chicago" />
      <img src={Denver} alt="Denver" />
      <img src={Hollywood} alt="Hollywood" />
      <img src={NewYork} alt="New York" />
    </>
  );
}

export default HomeCommunity;
