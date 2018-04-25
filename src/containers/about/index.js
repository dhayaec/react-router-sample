import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const About = () => (
  <div>
    <h1>About Page</h1>
    <p>Did you get here via Redux?</p>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/about-us">About</Link>
  </div>
);

export default withRouter(About);
