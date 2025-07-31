import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../Components/Footer";
import EquipmentService from '../Services/EquipmentService'

const EquipmentListPage = () => {
  const [equipments, setEquipments] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  useEffect(() => {
  const fetchImageBlob = async (id) => {
    const response = await fetch(`http://localhost:9191/ms2/equipment/${id}/image`, {
      method: 'GET'
    });

    const blob = await response.blob();
    return URL.createObjectURL(blob);
  };

  const loadImages = async () => {
    const equipmentList = await EquipmentService.getAllEquipment();
    const equipmentWithImages = await Promise.all(
      equipmentList.data.map(async (item) => {
        const imageUrl = await fetchImageBlob(item.id);
        return { ...item, imageUrl };
      })
    );
    setEquipments(equipmentWithImages);
  };

  loadImages();
}, []);


  

  return (
    <>
      <div className="container py-4">
        {/* Search and Filters */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
          <input
            type="text"
            placeholder="Search by Location..."
            className="form-control mb-3 mb-md-0"
            style={{ maxWidth: "300px" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="d-flex gap-2 mt-2 mt-md-0">
            {["All", "Tractor", "Attachment", "Harvester"].map((cat) => (
              <button
                key={cat}
                className={`btn ${
                  filter === cat ? "btn-success" : "btn-outline-success"
                }`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <h4 className="fw-bold mb-4">
          Over {equipments.length} Results
        </h4>

        {/* Equipment Cards */}
        <div className="row g-4">
          {equipments.map((item) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
              <div className="card border-0 shadow-lg h-100">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="card-img-top rounded-top"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">{item.name}</h5>
                  <p className="text-muted mb-1">📍 {item.location}</p>
                  <p className="text-muted mb-1">Description: {item.description}</p>
                  <p className="text-muted mb-2">Booking Type: Manual</p>
                  <h5 className="text-success mb-3">
                    ${item.pricePerDay}/Day
                  </h5>
                  <button className="btn btn-success w-100">Book</button>
                </div>
              </div>
            </div>
          ))}

          {equipments.length === 0 && (
            <div className="text-center text-muted mt-5">
              <h5>No equipment found</h5>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EquipmentListPage;
