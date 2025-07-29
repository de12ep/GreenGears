import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer";

const EquipmentDetailsPage = () => {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:9191/ms2/equipment/${id}`)
      .then((res) => setEquipment(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!equipment) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <>
      <div className="container py-5">
        <div className="row g-5 align-items-start">
          {/* Left - Image */}
          <div className="col-md-6">
            <img
              src={equipment.imageUrl}
              alt={equipment.name}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>

          {/* Right - Details */}
          <div className="col-md-6">
            <h2 className="fw-bold">{equipment.name}</h2>
            <p className="text-muted">{equipment.description}</p>

            <div className="mb-3">
              <span className="badge bg-secondary me-2">HP: {equipment.hp}</span>
              <span className="badge bg-secondary me-2">Booking: Manual</span>
              <span className="badge bg-secondary">Location: {equipment.location}</span>
            </div>

            <h4 className="text-success mb-3">${equipment.pricePerDay}/Day</h4>

            <h5 className="fw-bold mt-4">Features</h5>
            <ul>
              {equipment.features?.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <button className="btn btn-success mt-3 px-4 py-2">Book</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EquipmentDetailsPage;
