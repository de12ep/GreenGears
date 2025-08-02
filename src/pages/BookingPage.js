import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingService from "../Services/BookingService";
import PaymentService from "../Services/PaymentService";
const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const equipment = location.state?.equipdata;

  const [days, setDays] = useState(1);
  const [total, setTotal] = useState(equipment?.pricePerDay*days || 0);
const handleDaysChange = (e) => {
    const val = parseInt(e.target.value) || 1;
    setDays(val);
    setTotal(val * equipment.pricePerDay);
  };

  const handlePayment = () => {
   const bookingPayload = {
    equipmentId: equipment.id,
    equipmentName: equipment.name,
    amount: equipment.pricePerDay,
    noOfDays: days, // ✅ always fresh
  };
  
    alert(`Redirecting to payment of ₹${bookingPayload.noOfDays}`);
    // Example:
    BookingService.bookEquipment(bookingPayload)
      .then((response) => {
   
        window.location.href =response.sessionUrl;
  })
        .catch((error) => {
            console.error("Payment initiation failed:", error);
            alert("Payment initiation failed. Please try again.");
        }
        )};

  if (!equipment) return <h4 className="text-center mt-5 text-danger">Invalid booking data.</h4>;

  return (
    <div className="container py-5">
      <div className="row g-5">
        {/* Left - Image */}
        <div className="col-md-6">
          <img
            src={equipment.imageUrl}
            alt={equipment.name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Right - Booking Details */}
        <div className="col-md-6">
          <h2 className="fw-bold">{equipment.name}</h2>
          <p className="text-muted">{equipment.description}</p>
          <p><strong>Location:</strong> {equipment.location}</p>
          <h5 className="text-success">₹{equipment.pricePerDay} / Day</h5>

          <div className="mt-4">
            <label className="form-label fw-bold">Select number of days</label>
            <input
              type="number"
              min="1"
              value={days}
              onChange={handleDaysChange}
              className="form-control mb-3"
              style={{ maxWidth: "120px" }}
            />
            <h5>Total: ₹{total}</h5>
            <button className="btn btn-success mt-3 px-4 py-2" onClick={handlePayment}>
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
