import React, { useState, useContext } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';

//add logic to see whichh one is active and depending on which one is active, do a history.push

function Header() {
  const [buyStatus, setBuyStatus] = useState('active');
  const [rentStatus, setRentStatus] = useState('');
  const [communityStatus, setCommunityStatus] = useState('');
  const [manageStatus, setManageStatus] = useState('');
  const { contextSearch, setContextSearch } = useContext(AppContext);
  const history = useHistory();

  const buyClick = (event) => {
    setBuyStatus('active');
    setRentStatus('');
    setCommunityStatus('');
    setManageStatus('');
  };

  const rentClick = (event) => {
    setBuyStatus('');
    setRentStatus('active');
    setCommunityStatus('');
    setManageStatus('');
  };

  const communityClick = (event) => {
    setBuyStatus('');
    setRentStatus('');
    setCommunityStatus('active');
    setManageStatus('');
  };

  const manageClick = (event) => {
    setBuyStatus('');
    setRentStatus('');
    setCommunityStatus('');
    setManageStatus('active');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (buyStatus === 'active') history.push('/buy');
    else if (rentStatus === 'active') history.push('/rent');
    else if (communityStatus === 'active') history.push('/community');
    else if (manageStatus === 'active') history.push('/manage');
    //edit line 53 to go to the other page rather than the home manage page.
    const { data } = await axios.get(
      `api/search?location=${event.target.value}`
    );
    console.log(event.target.value);
    console.log(data);
    setContextSearch({ locations: data });
  };

  const handleChange = (event) => {
    setContextSearch(event.target.value);
    console.log(event.target.value);
    // this.setState({
    //   value: event.target.value
    // });
  };

  return (
    <>
      <section className="container2">
        <div className="HeaderHeading">
          <h1 className="HomeHeader">Let us guide you home</h1>
          <h3 className="HomeSubHeader">
            A place where community matters, and sweet memories are made with
            care and love the moment you walk through the door.
          </h3>
        </div>
      </section>
      <div className="HeaderSearchTab">
        <ul className="nav nav-tabs search-bar-nav-tabs" role="tablist">
          <li className="nav-item diff">
            <a
              className={`nav-link ${buyStatus}`}
              role="tab"
              onClick={() => buyClick()}
            >
              Buy
            </a>
          </li>
          <li className="nav-item diff">
            <a
              className={`nav-link ${rentStatus}`}
              role="tab"
              onClick={rentClick}
            >
              Rent
            </a>
          </li>
          <li className="nav-item diff">
            <a
              className={`nav-link ${communityStatus}`}
              role="tab"
              onClick={communityClick}
            >
              Community
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${manageStatus}`}
              role="tab"
              onClick={manageClick}
            >
              Manage
            </a>
          </li>
        </ul>
        <div className="search-bar search-bar-with-tabs">
          <div className="tab-content">
            <div className="tab-pane fade active show" role="tabpanel">
              <form onSubmit={handleSubmit}>
                <input
                  onChange={handleChange}
                  className="FirstSearchBar"
                ></input>
                <button className="FirstSearchBarSearchButton" type="Submit">
                  <FontAwesomeIcon
                    className="SearchIcon"
                    icon={faSearch}
                    size="4x"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

//wrap input around form component & on the form component, have an on submit event.
//set it equal to your own handlesubmit function.
