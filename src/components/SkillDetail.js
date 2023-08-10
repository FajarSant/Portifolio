import React from 'react';

function SkillDetail({ title, description }) {
  return (
    <div>
         <h2>MySkill</h2>
   
    <div className="skill-detail">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
    </div>
  );
}

export default SkillDetail;
