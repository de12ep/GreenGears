import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    phone: '',
    role: 'owner',
    city: '',
    state: '',
    dateOfBirth: '',
    isVerified: false, // hidden
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData); // replace with backend call
  };

  return (
    <div
  className="min-vh-100 d-flex align-items-center justify-content-center"
  style={{
    backgroundImage: "url('../images/signup.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
      <div className="container bg-white p-5 rounded shadow" style={{ maxWidth: '800px' }}>
        <h2 className="text-center mb-4">Signup</h2>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" name="userName" value={formData.userName} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label className="form-label">Role</label>
            <select className="form-select" name="role" value={formData.role} onChange={handleChange} required>
              <option value="owner">Owner</option>
              <option value="renter">Renter</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">City</label>
            <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label className="form-label">State</label>
            <input type="text" className="form-control" name="state" value={formData.state} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label className="form-label">Date of Birth</label>
            <input type="date" className="form-control" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
          </div>

          {/* Hidden field */}
          <input type="hidden" name="isVerified" value={formData.isVerified} />

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-success px-5">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
