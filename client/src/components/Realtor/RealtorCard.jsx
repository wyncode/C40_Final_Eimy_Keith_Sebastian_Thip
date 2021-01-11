import React from 'react';

const RealtorCard = ({ realtor }) => {
  return (
    <div>
      <div className="card-body">
        <div className="card-title">{realtor.name}</div>
        <div className="card-text">
          <div className="card-general-info">
            {realtor.city} {realtor.limit} {realtor.offset} {realtor.stateCode}
          </div>
          <div className="card-contact-info">
            {realtor.address}
            {realtor.phone} {realtor.website}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtorCard;
