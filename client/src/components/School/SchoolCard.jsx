import React from 'react';

const SchoolCard = ({ school }) => {
  return (
    <div>
      <div className="card-body">
        <div className="card-title">{school.name}</div>
        <div className="card-text">
          <div className="card-general-info">
            {school.type} {school.gradeRange} {school.enrollment}
            {school.gsRating} {school.parentRating}
          </div>
          <div className="card-contact-info">
            {school.address}
            {school.phone} {school.website}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
