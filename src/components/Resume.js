import React from 'react';

const Resume = () => {
  return (
    <section className="resume">
      <h1>Resume</h1>
      <p>Click the button below to download my resume:</p>
      <a href="/Akhilresume.pdf" download>Download Resume</a> {/* Link to the file */}
    </section>
  );
};

export default Resume;
