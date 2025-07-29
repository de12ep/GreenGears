import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../images/login2.jpg"; // your background image
import EquipmentService from "../Services/EquipmentService";
import { useNavigate } from 'react-router-dom';  
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const pageStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formStyle = {
    background: "rgba(255, 255, 255, 0.6)", // ✅ 60% transparent
    backdropFilter: "blur(6px)",
    padding: "30px",
    borderRadius: "15px",
    width: "350px", // ✅ Smaller width
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
    padding: "8px", // ✅ Smaller button
    borderRadius: "8px",
    transition: "all 0.3s ease",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#218838",
    transform: "scale(1.03)",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
     
    try {
      const res = await EquipmentService.Signin(formData);
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.role);

      if (res.role === "owner") navigate("/owner");
      else navigate("/renter");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

 

  return (
    <div style={pageStyle}>
      <div style={formStyle}>
        <h3 className="text-center mb-4 ">Welcome Back</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
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

          <button
            type="submit"
            style={isHovered ? buttonHoverStyle : buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
