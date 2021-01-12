import React from 'react';

const RealtorCard = ({ realtor }) => {
  return (
    <>
      <div className="realtor-content">
        <div className="realtor-card-body">
          {/* <div className="card-title">{realtor.name}</div> */}
          <div className="realtor-card-text">
            <div className="realtor-card-general-info">
              {realtor.address.city}
            </div>
            <div className="realtor-thumbnail">
              <img src={realtor.thumbnail} />
            </div>
            <div className="card-contact-info">
              <div className="realtor-price">${realtor?.price}</div>
              <div className="realtor-description">
                <p className="desc-one">{realtor?.beds}bd</p>
                <p className="desc-two">{realtor?.baths}ba</p>
                <p className="desc-two">
                  {realtor?.building_size?.size} {realtor?.building_size?.units}
                </p>
              </div>
              <div className="realtor-address">
                <div className="realtor-address-neighborhood">
                  {realtor?.address?.neighborhood_name}
                </div>
                <div className="realtor-address-full">
                  {realtor?.address?.line}, {''}
                  {realtor?.address?.city}, {realtor?.address?.state_code}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealtorCard;
