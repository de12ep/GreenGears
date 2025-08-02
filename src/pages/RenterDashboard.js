import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RenterDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const role = localStorage.getItem("role");

    if (!userData || role !== "RENTER") {
      alert("Unauthorized access");
      navigate("/login");
    } else {
      setUser(userData);
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Welcome, {user.name}</h2>

      <div className="card shadow p-4">
        <h4 className="mb-3">Profile Details</h4>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>

        <div className="mt-4 d-flex gap-3">
          <button className="btn btn-primary" onClick={() => navigate("/update-profile")}>
            Update Profile
          </button>
          <button className="btn btn-success" onClick={() => navigate("/bookings")}>
            My Bookings
          </button>
        </div>
      </div>
    </div>
  );
}
