import React, { useEffect, useState } from "react";
import EquipmentService from "../Services/EquipmentService";

export default function RenterDashboard() {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    fetchEquipments();
  }, []);
  const fetchEquipments = async () => {
      const data = await EquipmentService.getAllEquipment();
      setEquipments(data.data);
    };

  return (
    <div className="container mt-4">
      <h2>Available Equipments</h2>
      <div className="row">
        {equipments.map((eq) => (
          <div className="col-md-3 mb-3" key={eq.id}>
            <div className="card p-2">
              <img src={eq.imageUrl} className="card-img-top" style={{ height: "150px", objectFit: "cover" }} />
              <div className="card-body">
                <h5>{eq.name}</h5>
                <p>₹{eq.pricePerDay}/Day</p>
                <button className="btn btn-success w-100">Book</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
