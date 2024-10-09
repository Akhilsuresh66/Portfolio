import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="content">
        <h1>
          <Link to="/education" className="name-link">AKHIL</Link> {/* Make the name a link */}
        </h1>
        <h2>PYTHON FULL STACK DEVELOPER</h2>
      </div>
    </section>
  );
};

export default Home;