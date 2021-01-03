import React from 'react';
import './Home.css';
import Header from '../../components/Home-Header/Header';
import HomeBody from '../../components/Home-Body/Body';
import CommunitySearchBar from '../../components/Community-SearchBar/CommunitySearchBar';
import HomeCommunity from '../../components/Home-Community/Community';

function Home() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <HomeBody />
      </div>
      <div>
        <CommunitySearchBar />
      </div>
      <div>
        <HomeCommunity />
      </div>
    </>
  );
}

export default Home;
