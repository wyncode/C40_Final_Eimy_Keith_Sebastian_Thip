import React from 'react';
import './Home.css';
import Header from '../../components/Home-Header/Header';
import HomeBody from '../../components/Home-Body/Body';

function Home() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <HomeBody />
      </div>
    </>
  );
}

export default Home;
