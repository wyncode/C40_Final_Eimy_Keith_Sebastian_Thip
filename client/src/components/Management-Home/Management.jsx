import React from 'react';
import Remodeling from '../../Assests/remodeling.png';
import Plumbing from '../../Assests/plumbing.png';
import Roofing from '../../Assests/roofing.png';
import Landscaping from '../../Assests/landscaping.png';
import Electrical from '../../Assests/electrical.png';
import HeatingAC from '../../Assests/heating-ac.png';
import Painting from '../../Assests//painting.png';
import Housecleaning from '../../Assests/housecleaning.png';
import Marker from '../../Assests/marker.png';

function ManagementHome() {
  return (
    <>
      <div className="containerManagement">
        <div className="ManagementHeaderHeading">
          <h1 className="ManagementHeader">
            Find top-rated, certified pros for your project
          </h1>
          <h3 className="ManagementSubHeader">
            A simplified way to connect with the right experts to assist you in
            making your home a better place.
          </h3>
        </div>
        <div className="ManagementSearch">
          <div className="MainSearchBar">
            <input className="SearchBar" placeholder="Search..."></input>
          </div>
          <hr></hr>
          <img className="Marker" src={Marker} alt="Location Marker"></img>
          <div className="MainZipSearchBar">
            <input className="ZipSearchBar" placeholder="Zip code"></input>
            <input
              className="SearchBarButton"
              type="submit"
              value="Find Pros"
            ></input>
          </div>
        </div>
      </div>
      <h2 id="HeadingTwo">Popular Services</h2>
      <div className="ManagementIcons">
        <img className="Remodeling" src={Remodeling} alt="Remodeling" />
        <hr></hr>
        <img className="Plumbing" src={Plumbing} alt="Plumbing" />
        <hr></hr>
        <img className="Roofing" src={Roofing} alt="Roofing" />
        <hr></hr>
        <img className="Landscaping" src={Landscaping} alt="Landscaping" />
        <hr></hr>
        <img className="Electrical" src={Electrical} alt="Electrical" />
        <hr></hr>
        <img className="HeatingAC" src={HeatingAC} alt="Heating and AC" />
        <hr></hr>
        <img className="Painting" src={Painting} alt="Painting" />
        <hr></hr>
        <img
          className="Housecleaning"
          src={Housecleaning}
          alt="House Cleaning"
        />
      </div>
    </>
  );
}

export default ManagementHome;
