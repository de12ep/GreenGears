import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const handleBrandClick = () => {
   
     navigate("/");
  };

  const goToDashboard = () => {
    if (user?.role === "OWNER") navigate("/owner");
    else if (user?.role === "RENTER") navigate("/renter");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <span
        className="navbar-brand fw-bold"
        style={{ cursor: "pointer" }}
        onClick={handleBrandClick}
      >
        GreenGear
      </span>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item me-3">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" to="/how-it-works">How It Works</Link>
          </li>

          {!user ? (
            <>
              <li className="nav-item">
                <Link to="/login" className="btn btn-success me-2">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="btn btn-success">Signup</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item me-3">
                
                  <img
                    src={user.profilePic || "/default-avatar.png"}
                    alt="Profile"
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: "50%",
                      marginRight: 8,
                    }}
                  />
                  {user.userName}
                
              </li>

              <li className="nav-item me-2">
                <button onClick={goToDashboard} className="btn btn-outline-primary">
                  Go to Dashboard
                </button>
              </li>

              <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-danger">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
