import React from 'react';
import './ManageResults.css';
import Sebastian from '../../Assests/sebastian.jpg';
import Thip from '../../Assests/thip.jpg';
import Keith from '../../Assests/keith.jpg';
import FullStar from '../../Assests/star.png';
import HalfStar from '../../Assests/half-star.png';
import GreyStar from '../../Assests/grey-star (1).png';
import ReplyRate from '../../Assests/reply-rate.png';
import PaymentsVerified from '../../Assests/payments-verified.png';
import ConfirmedPhone from '../../Assests/phone-verified.png';
import ConfirmedEmail from '../../Assests/email-verified.png';
import Discounts from '../../Assests/discount.png';
import Marker from '../../Assests/marker.png';
import { Link } from 'react-router-dom';
import Eimy from '../../Assests/eimy.jpg';
import Logo from '../../Assests/logo.png';

const ManageResults = () => {
  return (
    <>
      <div className="ManagementMainContent">
        <div className="ManagementSearch2">
          <div className="MainSearchBar2">
            <input className="SearchBarManage" placeholder="Search..."></input>
          </div>
          <hr></hr>
          <img className="Marker2" src={Marker} alt="Location Marker"></img>
          <div className="MainZipSearchBar">
            <input
              className="ZipSearchBarManage"
              placeholder="Zip code"
            ></input>
            <Link to="/manageResults">
              <input
                className="SearchBarButton"
                type="submit"
                value="Find Pros"
              ></input>
            </Link>
          </div>
        </div>
        <div className="ManageResultsBody">
          <div className="Filters">
            <h2 className="FiltersWord">Filters</h2>
            <div className="FilterBody">
              <h3 className="FilterTopic">Frequency</h3>
              <div className="FilterBodyInput">
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="Just Once"
                ></input>
                <label className="FiltersLabel">Just once</label>
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="Every Week"
                ></input>
                <label className="FiltersLabel">Every week</label>
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="Every 2 Weeks"
                ></input>
                <label className="FiltersLabel">Every 2 weeks</label>
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="Once a month"
                ></input>
                <label className="FiltersLabel">Once a month</label>
              </div>
            </div>
            <div className="FilterBody">
              <h3 className="FilterTopicBed">Number of bedrooms</h3>
              <div className="FilterBodyInput">
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="Bedrooms"
                ></input>
                <label className="FiltersLabel">1 Bedrooms</label>
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="Bedrooms"
                ></input>
                <label className="FiltersLabel">2 Bedrooms</label>
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="Bedrooms"
                ></input>
                <label className="FiltersLabel">3 Bedrooms</label>
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="Bedrooms"
                ></input>
                <label className="FiltersLabel">4 Bedrooms</label>
                <p className="More">More</p>
              </div>
            </div>
            <div className="FilterBody">
              <h3 className="FilterTopicBath">Number of bathrooms</h3>
              <div className="FilterBodyInput">
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="bathrooms"
                ></input>
                <label className="FiltersLabel">1 Bathroom</label>
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="bathrooms"
                ></input>
                <label className="FiltersLabel">2 Bathrooms</label>
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="bathrooms"
                ></input>
                <label className="FiltersLabel">3 Bathrooms</label>
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="bathrooms"
                ></input>
                <label className="FiltersLabel">4 Bathroooms</label>
                <p className="More">More</p>
              </div>
            </div>
            <div className="FilterBody">
              <h3 className="FilterTopicClean">Cleaning type</h3>
              <div className="FilterBodyInput">
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="Standard cleaning"
                ></input>
                <label className="FiltersLabel">Standard cleaning</label>
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="Deep cleaning"
                ></input>
                <label className="FiltersLabel">Deep cleaning</label>
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="Move out cleaning"
                ></input>
                <label className="FiltersLabel">Move out cleaning</label>
              </div>
            </div>
            <div className="FilterBody">
              <h3 className="FilterTopicExtra">Extra services</h3>
              <div className="FilterBodyInput">
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="Window cleaning"
                ></input>
                <label className="FiltersLabel">Window cleaning</label>
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="Fridge cleaning"
                ></input>
                <label className="FiltersLabel">Fridge cleaning</label>
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="Oven cleaning"
                ></input>
                <label className="FiltersLabel">Oven cleaning</label>
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="Laundry"
                ></input>
                <label className="FiltersLabel">Laundry</label>
              </div>
            </div>
            <div className="FilterBody">
              <h3 className="FilterTopicPets">Pets</h3>
              <div className="FilterBodyInput">
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="Has pets"
                ></input>
                <label className="FiltersLabel">Has pets</label>
              </div>
              <div className="FilterBodyInputLast">
                <input
                  type="checkbox"
                  id=""
                  name="frequency"
                  value="No pets"
                ></input>
                <label className="FiltersLabel">No pets</label>
              </div>
              <p className="Reset">Reset</p>
            </div>
          </div>
          <div className="Profiles">
            <div className="ProfileBody">
              <img
                className="ProfileImage"
                src={Sebastian}
                alt="ProfileImage"
              ></img>
              <div className="ProfileInfo">
                <h3 className="BusinessTitle">Consuela Cleaning Services</h3>
                <div className="Rating">
                  <p className="RatingRate">Good</p>
                  <img
                    className="RatingStar"
                    src={FullStar}
                    alt="Rating Star"
                  ></img>
                  <img
                    className="RatingStar"
                    src={FullStar}
                    alt="Rating Star"
                  ></img>
                  <img
                    className="RatingStar"
                    src={FullStar}
                    alt="Rating Star"
                  ></img>
                  <img
                    className="RatingStar"
                    src={FullStar}
                    alt="Rating Star"
                  ></img>
                  <img
                    className="RatingStar"
                    src={GreyStar}
                    alt="Rating Star"
                  ></img>
                  <p>(312)</p>
                </div>
                <div className="ProfileFeature">
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={ReplyRate}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">87% Reply rate</p>
                  </div>
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={PaymentsVerified}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">Payments verified</p>
                  </div>
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={ConfirmedPhone}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">Confirmed phone</p>
                  </div>
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={ConfirmedEmail}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">Confirmed email</p>
                  </div>
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={Discounts}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">Discounts available</p>
                  </div>
                </div>
                <div className="Hires">
                  <img className="HireLogo" src={Logo} alt="EstateRev"></img>
                  <p className="HiresNumber">429 hires on EstateRev</p>
                </div>
              </div>
              <div className="ProfileInfoTwo">
                <div className="Cost">
                  <h3 className="CostAmount">$100</h3>
                  <p className="StartingCost">Starting cost</p>
                </div>
                <div className="ViewProfile">
                  <input
                    className="ViewProfileButton"
                    type="submit"
                    value="View profile"
                  ></input>
                </div>
              </div>
            </div>
            <div className="ProfileBody">
              <img className="ProfileImage" src={Thip} alt="ProfileImage"></img>
              <div className="ProfileInfo">
                <h3 className="BusinessTitleTwo">Clean Outlook Co</h3>
                <div className="Rating">
                  <p className="RatingRate">Great</p>
                  <img
                    className="RatingStar"
                    src={FullStar}
                    alt="Rating Star"
                  ></img>
                  <img
                    className="RatingStar"
                    src={FullStar}
                    alt="Rating Star"
                  ></img>
                  <img
                    className="RatingStar"
                    src={FullStar}
                    alt="Rating Star"
                  ></img>
                  <img
                    className="RatingStar"
                    src={FullStar}
                    alt="Rating Star"
                  ></img>
                  <img
                    className="RatingStar"
                    src={HalfStar}
                    alt="Rating Star"
                  ></img>
                  <p>(163)</p>
                </div>
                <div className="ProfileFeature">
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={ReplyRate}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">95% Reply rate</p>
                  </div>
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={PaymentsVerified}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">Payments verified</p>
                  </div>
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={ConfirmedPhone}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">Confirmed phone</p>
                  </div>
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={ConfirmedEmail}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">Confirmed email</p>
                  </div>
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={Discounts}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">Discounts available</p>
                  </div>
                </div>
                <div className="Hires">
                  <img className="HireLogo" src={Logo} alt="EstateRev"></img>
                  <p className="HiresNumber">210 hires on EstateRev</p>
                </div>
              </div>
              <div className="ProfileInfoTwo">
                <div className="Cost">
                  <h3 className="CostAmount">$130</h3>
                  <p className="StartingCost">Starting cost</p>
                </div>
                <div className="ViewProfile">
                  <input
                    className="ViewProfileButton"
                    type="submit"
                    value="View profile"
                  ></input>
                </div>
              </div>
            </div>
            <div className="ProfileBody">
              <img
                className="ProfileImage"
                src={Keith}
                alt="ProfileImage"
              ></img>
              <div className="ProfileInfo">
                <h3 className="BusinessTitleFour">
                  You Want It, We Got It LLC
                </h3>
                <div className="Rating">
                  <p className="RatingRate">Okay</p>
                  <img
                    className="RatingStar"
                    src={FullStar}
                    alt="Rating Star"
                  ></img>
                  <img
                    className="RatingStar"
                    src={FullStar}
                    alt="Rating Star"
                  ></img>
                  <img
                    className="RatingStar"
                    src={FullStar}
                    alt="Rating Star"
                  ></img>
                  <img
                    className="RatingStar"
                    src={GreyStar}
                    alt="Rating Star"
                  ></img>
                  <img
                    className="RatingStar"
                    src={GreyStar}
                    alt="Rating Star"
                  ></img>
                  <p>(3)</p>
                </div>
                <div className="ProfileFeature">
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={ReplyRate}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">76% Reply rate</p>
                  </div>
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={PaymentsVerified}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">Payments verified</p>
                  </div>
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={ConfirmedPhone}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">Confirmed phone</p>
                  </div>
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={ConfirmedEmail}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">Confirmed email</p>
                  </div>
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={Discounts}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">Discounts available</p>
                  </div>
                </div>
                <div className="Hires">
                  <img className="HireLogo" src={Logo} alt="EstateRev"></img>
                  <p className="HiresNumber">7 hires on EstateRev</p>
                </div>
              </div>
              <div className="ProfileInfoTwo">
                <div className="Cost">
                  <h3 className="CostAmount">$170</h3>
                  <p className="StartingCost">Starting cost</p>
                </div>
                <div className="ViewProfile">
                  <input
                    className="ViewProfileButton"
                    type="submit"
                    value="View profile"
                  ></input>
                </div>
              </div>
            </div>
            <div className="ProfileBody">
              <img className="ProfileImage" src={Eimy} alt="ProfileImage"></img>
              <div className="ProfileInfo">
                <h3 className="BusinessTitleThree">Unforgettable Clean</h3>
                <div className="Rating">
                  <p className="RatingRate">Exceptional</p>
                  <img
                    className="RatingStar"
                    src={FullStar}
                    alt="Rating Star"
                  ></img>
                  <img
                    className="RatingStar"
                    src={FullStar}
                    alt="Rating Star"
                  ></img>
                  <img
                    className="RatingStar"
                    src={FullStar}
                    alt="Rating Star"
                  ></img>
                  <img
                    className="RatingStar"
                    src={FullStar}
                    alt="Rating Star"
                  ></img>
                  <img
                    className="RatingStar"
                    src={FullStar}
                    alt="Rating Star"
                  ></img>
                  <p>(623)</p>
                </div>
                <div className="ProfileFeature">
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={ReplyRate}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">101% Reply rate</p>
                  </div>
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={PaymentsVerified}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">Payments verified</p>
                  </div>
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={ConfirmedPhone}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">Confirmed phone</p>
                  </div>
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={ConfirmedEmail}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">Confirmed email</p>
                  </div>
                  <div className="FeatureIcon">
                    <img
                      className="ProfileFeatureIcon"
                      src={Discounts}
                      alt="Feature Icon"
                    ></img>
                    <p className="FeatureDescription">Discounts available</p>
                  </div>
                </div>
                <div className="Hires">
                  <img className="HireLogo" src={Logo} alt="EstateRev"></img>
                  <p className="HiresNumber">695 hires on EstateRev</p>
                </div>
              </div>
              <div className="ProfileInfoTwo">
                <div className="Cost">
                  <h3 className="CostAmount">$127</h3>
                  <p className="StartingCost">Starting cost</p>
                </div>
                <div className="ViewProfile">
                  <input
                    className="ViewProfileButton"
                    type="submit"
                    value="View profile"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageResults;
