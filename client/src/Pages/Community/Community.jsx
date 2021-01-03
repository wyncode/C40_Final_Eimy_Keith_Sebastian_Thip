import React from 'react';
import './Community.css';

import MyMapComponent from '../../components/GoogleMap/GoogleMap';

function Community() {
  return (
    <>
      <div className="communityPage">
        <h1>Community Page</h1>
      </div>
      <MyMapComponent />
    </>
  );
}

export default Community;
