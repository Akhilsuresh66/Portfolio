import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <div className="card">
        <h2>Projects</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Movie Ticket Booking</h3>
            <p>
              Developed an innovative Movie Ticket Management System using Django and React.js.
            </p>
            <ul>
              <li>Admin Panel: Enabled seamless movie and user management with CRUD operations.</li>
              <li>User Panel: Provided an intuitive interface for logging in, signing up, and booking tickets.</li>
              <li>PDF Tickets: Implemented QR code-enabled, downloadable PDF tickets for convenience.</li>
              <li>Payments: Integrated Razorpay for secure payment processing and automatic email confirmations.</li>
              <li>Skills: User Interface Design, Back-End Web Development, Payment Processing, Ticketing Systems.</li>
            </ul>
          </div>
          <div className="timeline-item">
            <h3>Medical Store Management</h3>
            <p>
              Developed a Medical Store Management System using Django and MySQL to streamline inventory and sales management.
            </p>
            <ul>
              <li>User-Friendly Signup/Login: Simplified onboarding with an intuitive signup/login system.</li>
              <li>Medicine Management: Comprehensive features to add, edit, search, and remove medicines from inventory.</li>
              <li>User Interface: Intuitive design for easy navigation, enhancing usability and productivity for all users.</li>
              <li>Skills: MySQL, Sales, Customer Onboarding, User Interface Design, Medical Management.</li>
            </ul>
          </div>
          <div className="timeline-item">
            <h3>Train Ticket Booking</h3>
            <p>
              Developed a web app using Django (backend) and React (frontend) for train ticket booking and management.
            </p>
            <ul>
              <li>Enabled users to search schedules, book tickets, and manage bookings through an intuitive interface.</li>
              <li>Integrated real-time updates for train schedules and seat availability.</li>
              <li>Implemented secure user registration and authentication.</li>
              <li>Integrated a secure payment gateway for transactions.</li>
              <li>Provided features for managing booking history, cancellations, and e-ticket downloads.</li>
              <li>Designed an admin panel for managing train schedules and user queries.</li>
              <li>Skills: Real-time Monitoring, Secure Authentication, Back-End Web Development, Ticket Operations.</li>
            </ul>
          </div>
          {/* Add more project divs as needed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
