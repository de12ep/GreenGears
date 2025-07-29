import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EquipmentService from "../Services/EquipmentService";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const EquipmentListPage = () => {
  const [equipments, setEquipments] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const Equipmentdata = await EquipmentService.getAllEquipment();
      setEquipments(Equipmentdata);
    } catch (error) {
      console.error("Error fetching equipment:", error);
    }
  };

  const filteredEquipments = equipments.filter((item) => {
    const matchesCategory =
      filter === "All" ? true : item.category === filter;
    const matchesSearch = item.location
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCardClick = (id) => {
    navigate(`/equipment/${id}`);
  };

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
          Over {filteredEquipments.length} Results
        </h4>

        {/* Equipment Cards */}
        <div className="row g-4">
          {filteredEquipments.map((item) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3"
              key={item.id}
              style={{ cursor: "pointer" }}
              onClick={() => handleCardClick(item.id)}
            >
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
                  <p className="text-muted mb-1">Capacity: {item.capacity}</p>
                  <h5 className="text-success mb-3">
                    ${item.pricePerDay}/Day
                  </h5>
                  <button className="btn btn-success w-100">Book</button>
                </div>
              </div>
            </div>
          ))}

          {filteredEquipments.length === 0 && (
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
 