import React from 'react';

const EducationCard = ({ institution, degree, year }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{degree}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{institution}</h6>
        <p className="card-text">Year: {year}</p>
      </div>
    </div>
  );
};

export default EducationCard;