import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data Submitted:", formData);
    // You can send to backend here
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <div className="card shadow p-4">
          <h3 className="text-center mb-4 text-success">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
