import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // optional for extra styles
import { Link } from 'react-router-dom';
//import SignupPage from '../pages/SignupPage';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3">
      <Link className="navbar-brand fw-bold text-success" to="/">
        GreenGear
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/how-it-works">How it works</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/login" className="btn btn-outline-success me-2 hover-btn">Login</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className=" btn btn-outline-success me-2 hover-btn" to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
