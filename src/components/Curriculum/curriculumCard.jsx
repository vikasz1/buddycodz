// CurriculumCard.js
import React from 'react';
import './curriculumCard.css';

const CurriculumCard = (props) => {
  const { image, title, description } = props.data;

  return (
    <div className="my-card">
      <div className="course-img">
        <img src={image} alt="" className="w-100" style={{ height: '200px' }} />
      </div>

      <div className="course-details">
        <h6 className="course-title">{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CurriculumCard;
