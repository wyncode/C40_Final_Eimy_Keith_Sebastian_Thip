import React, { useEffect, useState } from 'react';
import './Community.css';
import axios from 'axios';
import MyMapComponent from '../../components/GoogleMap/GoogleMap';

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
        <h1>Community Page</h1>
      </div>
      <MyMapComponent mapKey={mapKey} />
    </>
  );
}

export default Community;
