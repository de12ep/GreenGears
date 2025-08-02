import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
const EquipmentDetailsPage = () => {
  const location=useLocation();
  const equipdetails= location.state?.equipdata;
  const [equipment, setEquipment] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchDetails = async () => {
  try {
    const reviewsRes = await axios.get(`http://localhost:9191/ms4/review/${equipdetails.id}`);
   
    setReviews(reviewsRes.data);
  } catch (err) {
    console.error("Error loading equipment or reviews:", err);
  } finally {
    setLoading(false);
  }
};
 setEquipment(equipdetails);
    fetchDetails();
  }, [equipdetails]);
const bookequip=(item) => {
    const role = localStorage.getItem("role");
    if (!role) {
      alert("You must be logged in to book equipment.");
      return;
    }
    if (role !== "RENTER") {    
      alert("You must be a Renter to book equipment.");
      return;
    }
    navigate(`/booking/${item.id}`, { state: { equipdata: item } });
  };  

  if (loading) return <h3 className="text-center mt-5">Loading equipment details...</h3>;

  if (!equipment) return <h4 className="text-center mt-5 text-danger">Equipment not found.</h4>;

  return (
    <>
      <div className="container py-5">
        <div className="row g-5">
          {/* Left: Image */}
          <div className="col-md-6 text-center">
            <img
              src={equipment.imageUrl || "/placeholder.jpg"}
              alt={equipment.name}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "450px", width: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder.jpg"; // fallback
              }}
            />
          </div>

          {/* Right: Equipment Info */}
          <div className="col-md-6">
            <h2 className="fw-bold">{equipment.name}</h2>
            <p className="text-muted">{equipment.description}</p>

            <div className="mb-3">
              
              <span className="badge bg-warning me-2">Booking: Manual</span>
              <span className="badge bg-info">Location: {equipment.location}</span>
            </div>

            <h4 className="text-success">${equipment.pricePerDay}/Day</h4>

          
            
            {equipment.availability ? (
            <button className="btn btn-success mt-3" onClick={() => bookequip(equipment)}>
              Book Now  
            </button>
            ) : ( 
            <button className="btn btn-secondary mt-3" disabled>
              Not Available 
            </button>
            )}  
           
           
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-5">
          <h4 className="fw-bold mb-3">Customer Reviews</h4>
          {reviews.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {reviews.map((rev, i) => (
                <div key={i} className="col">
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body">
                      <h6 className="card-title fw-bold mb-1">{rev.name}</h6>
                      <p className="mb-1 text-warning">⭐ {rev.rating} / 5</p>
                      <p className="card-text text-muted">{rev.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted">No reviews yet for this equipment.</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EquipmentDetailsPage;
