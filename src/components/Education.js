import React from 'react';
import './Education.css'; // Import the CSS file for styling

const Education = () => {
  return (
    <section className="education-container">
      {/* Left Side - Education with Timeline */}
      <div className="education-timeline">
        <h2>Education</h2>
        <ul>
          <li>
            <span className="year">2017-2018</span> 
            Sree Narayana Public School<br />
            <span className="cgpa">CGPA: 8.0</span>
          </li>
          <li>
            <span className="year">2018-2019</span> 
            High School-Sree Narayana Public School<br />
            <span className="cgpa">Percentage: 63%</span>
          </li>
          <li>
            <span className="year">2019-2023</span> 
            B.Tech in Computer Science Engineering - St. Thomas Institute for Science and Technology <br />
            <span className="cgpa">CGPA: 6.1</span>
          </li>
        </ul>
      </div>

      {/* Right Side - Your Image */}
      <div className="personal-image-section">
        <img src="me-image.JPG" alt="Akhil" className="personal-image" />
      </div>
    </section>
  );
};

export default Education;
