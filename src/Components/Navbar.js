import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT token
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link className="navbar-brand" to="/">
        GreenGear
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          {!user ? (
            <>
              <li className="nav-item">
                <Link to="/login" className="btn btn-outline-primary me-2">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="btn btn-primary">
                  Signup
                </Link>
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
                      marginRight: 8,
                      objectFit: "cover",
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
