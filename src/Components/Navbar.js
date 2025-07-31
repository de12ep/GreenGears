import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link className="navbar-brand fw-bold " to="/">GreenGear</Link> {/* ✅ Bold Brand */}

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto align-items-center">
          {/* ✅ Always visible links on RIGHT */}
          <li className="nav-item me-3">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" to="/how-it-works">How It Works</Link>
          </li>

          {/* ✅ Auth Buttons */}
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
                <Link to="/profile" className="btn btn-light d-flex align-items-center">
                  <img
                    src={user.profilePic || "/default-avatar.png"}
                    alt="Profile"
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: "50%",
                      marginRight: 8
                    }}
                  />
                  {user.userName}
                </Link>
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
