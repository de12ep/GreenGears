import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../images/signup.jpg";
import EquipmentService from "../Services/EquipmentService"; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom';  
const SignupPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    phone: "",
    role: "RENTER",
    city: "",
    state: "",
    dateOfBirth: "",
    isVerified: false,
  });
const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger fade-in animation on load

  }, []);

  const pageStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
  };

  const formContainerStyle = {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
  };

  const formStyle = {
    background: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(6px)",
    padding: "30px",
    borderRadius: "15px",
    width: "90%",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
    opacity: fadeIn ? 1 : 0,
    transform: fadeIn ? "translateY(0px)" : "translateY(30px)",
    transition: "opacity 1s ease, transform 1s ease",
  };

  const buttonStyle = {
    backgroundColor: "#28a745",
    border: "none",
    fontWeight: "bold",
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#218838",
    transform: "scale(1.03)",
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    await EquipmentService.SignUp(formData)
navigate("/login"); // Redirect to login page after successful signup
  };

  return (
    <div style={pageStyle}>
      <div style={{ width: "50%" }}></div>

      <div style={formContainerStyle}>
        <div style={formStyle}>
          <h3 className="text-center mb-4 ">Create Your Account</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-semibold">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="phone" className="form-label fw-semibold">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="role" className="form-label fw-semibold">
                Role
              </label>
              <select
                id="role"
                className="form-select"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="OWNER">Owner</option>
                <option value="RENTER">Renter</option>
              </select>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="city" className="form-label fw-semibold">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="form-control"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="state" className="form-label fw-semibold">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="form-control"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="dob" className="form-label fw-semibold">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="form-control"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>

            <input type="hidden" name="isVerified" value="false" />

            <button
              type="submit"
              style={isHovered ? buttonHoverStyle : buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
