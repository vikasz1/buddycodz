import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1 className="title">404</h1>
      <p className="message">Oops! The page you're looking for does not exist or is not ready yet.</p>
      <p className="sub-message">Don't worry, let's get you back on track.</p>
      <Link to="/" className="home-link">Go to Homepage</Link>
    </div>
  );
};

export default NotFound;
