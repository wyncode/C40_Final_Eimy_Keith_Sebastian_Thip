import React from 'react';

const SchoolCard = ({ school }) => {
  return (
    <div className="main-card-body">
      <div className="card-body">
        <div className="card-title">{school.name}</div>
        <div className="card-text">
          <div className="card-general-info">
            <div className="school-type-info">
              <div className="school-type">{school.gradeRange}</div>
              <li className="school-type-two">{school.type}</li>
              <li className="school-type-two">{school.enrollment}</li>
            </div>
            <div className="school-rating-main">
              <div className="rating-one">
                <div className="school-rating">{school.gsRating}</div>
                <p>Great Schools Rating</p>
              </div>
              <div className="rating-one">
                <div className="school-rating">{school.parentRating}</div>
                <p>Parent Rating Average</p>
              </div>
            </div>
          </div>
          <div className="card-contact-info">
            <h3 className="school-contact-info">Contact Information</h3>
            <div className="extra-info">{school.address}</div>
            <div className="extra-info">{school.phone}</div>
            <div className="extra-info">{school.website}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
