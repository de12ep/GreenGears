import React, { useEffect, useState } from "react";
import BookingService from "../Services/BookingService";

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    BookingService.getBookingsByUser()
      .then((res) => {
        setBookings(res);
      })
      .catch((err) => {
        alert("Failed to fetch bookings:", err);
      })
      .finally(() => setLoading(false));
  }, [token]);

  if (!token) return <h4 className="text-danger text-center mt-5">You must be logged in to view bookings.</h4>;
  if (loading) return <h4 className="text-center mt-5">Loading your bookings...</h4>;
  if (bookings.length === 0) return <h5 className="text-center mt-5">No bookings found.</h5>;

  return (
    <div className="container py-4">
      <h2 className="mb-4">My Bookings</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Booking ID</th>
              <th>Equipment</th>
              <th>No. of Days</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((bk) => (
              <tr key={bk.id}>
                <td>{bk.id}</td>
                <td>{bk.equipmentName}</td>
                <td>{bk.noOfDays}</td>
                <td>₹{bk.amount}</td>
                <td>{new Date(bk.lastUpdatedOn).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingsPage;
