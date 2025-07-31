import React, { useEffect, useState } from "react";
import EquipmentService from "../Services/EquipmentService";

import { useNavigate } from 'react-router-dom';

export default function OwnerDashboard() {
  const [equipments, setEquipments] = useState([]);

  const fetchEquipments = async () => {
    const data = await EquipmentService.getAllOwnerEquipment();
    setEquipments(data.data);
  };
const navigate = useNavigate();
  const deleteEquipment = async (id) => {
    await EquipmentService.deleteEquipment(id);
    fetchEquipments();
  };

  const addEquipment = () => {
    navigate("/uploadequipment");
  }

  useEffect(() => {
    fetchEquipments();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Owner Dashboard</h2>
      <button className="btn btn-success mb-3" onClick={addEquipment}>List your Equipment</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price/Day</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {equipments.map((eq) => (
            <tr key={eq.id}>
              <td>{eq.name}</td>
              <td>₹{eq.pricePerDay}</td>
              <td>{eq.location}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteEquipment(eq.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
          {equipments.length === 0 && (
            <div className="text-center text-muted mt-5">
              <h5>No equipment found</h5>
            </div>
          )}
    </div>
  );
}
