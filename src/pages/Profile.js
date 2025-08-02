import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [formData, setFormData] = useState({
    id: "",
    userName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    dateOfBirth: "",
    image: "",
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setFormData(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let uploadedPic = formData.image;

      // Upload image if selected
      if (file) {
        const picData = new FormData();
        picData.append("file", file);

        const uploadRes = await axios.post(
          "http://localhost:9191/api/upload",
          picData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        uploadedPic = uploadRes.data.fileUrl;
      }

      const updatedData = { ...formData, profilePic: uploadedPic };

      const res = await axios.put(
        `http://localhost:9191/api/users/${formData.id}`,
        updatedData
      );

      setFormData(res.data);
      localStorage.setItem("user", JSON.stringify(res.data)); // update localStorage
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 600 }}>
      <h3 className="text-center mb-4">My Profile</h3>
      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <div className="text-center mb-3">
          <img
            src={formData.image || "/default-avatar.png"}
            alt="Profile"
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>

        <input
          type="file"
          className="form-control mb-3"
          onChange={handleFileChange}
        />

        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Name"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          className="form-control mb-3"
          disabled
        />

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Phone"
        />

        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="City"
        />

        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="State"
        />

        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="form-control mb-3"
        />

        <button type="submit" className="btn btn-primary w-100">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
