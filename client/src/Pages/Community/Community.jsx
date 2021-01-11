import React, { useEffect, useState } from 'react';
import './Community.css';
import axios from 'axios';
import MyMapComponent from '../../components/GoogleMap/GoogleMap';
import Schools from '../../components/School/School';
import Realtor from '../../components/Realtor/Realtor';
import Reps from '../../components/Cicero/Cicero';
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
      <Schools></Schools>
      <Realtor></Realtor>
      <Reps />
    </>
  );
}

export default Community;
