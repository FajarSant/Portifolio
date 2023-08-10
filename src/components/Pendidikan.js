import React from 'react';
import EducationCard from './EducationCard';
import '../Style/Pendidikan.css'

const Pendidikan = () => {
  const educationData = [
    {
      institution: 'Universitas Muhammadiyah Surakarta',
      degree: 'Informatics Engineering Education',
      year: '2020-Sekarang',
    },
    {
      institution: 'SMK Negri Ngargoyoso',
      degree: 'Otomotif',
      year: '2017-2020',
    },
  ];

  return (
    <div className="container mt-5">
      <h1>Education History</h1>
      {educationData.map((edu, index) => (
        <EducationCard
          key={index}
          institution={edu.institution}
          degree={edu.degree}
          year={edu.year}
        />
      ))}
    </div>
  );
};

export default Pendidikan;
