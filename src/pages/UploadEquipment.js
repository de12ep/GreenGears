import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UploadEquipmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    pricePerDay: "",
    availability: false,
    location: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, image: files[0] });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded Data:", formData); // Later connect to backend
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container bg-white p-4 rounded shadow" style={{ maxWidth: "650px" }}>
        <h2 className="text-center mb-4 text-success">Upload Equipment</h2>
        <form onSubmit={handleSubmit} className="row g-3">

          {/* Image Upload */}
          <div className="col-12">
            <label className="form-label">Upload Image</label>
            <input
              type="file"
              className="form-control"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>

          {/* Name */}
          <div className="col-md-6">
            <label className="form-label">Equipment Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Price */}
          <div className="col-md-6">
            <label className="form-label">Price Per Day (₹)</label>
            <input
              type="number"
              className="form-control"
              name="pricePerDay"
              value={formData.pricePerDay}
              onChange={handleChange}
              required
            />
          </div>

          {/* Location */}
          <div className="col-md-6">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

        

          {/* Description */}
          <div className="col-12">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter details about the equipment"
              required
            ></textarea>
          </div>
            {/* Availability */}
          <div className="col-md-6 d-flex align-items-center">
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="availability"
                checked={formData.availability}
                onChange={handleChange}
              />
              <label className="form-check-label">Available</label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-success px-5">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
