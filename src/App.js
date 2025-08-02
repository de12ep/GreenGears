import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/Loginpage";
import AboutUs from "./pages/AboutUs";
import HowItWork from "./pages/how-it-works";
import LandingPage from "./pages/LandingPage";
import OwnerDashboard from "./pages/OwnerDashboard";
import RenterDashboard from "./pages/RenterDashboard";
import AllEquipments from "./pages/EquipmentListPage";
import EquipmentDetailsPage from "./pages/EquipmentDetailPage";
import UploadEquipment from "./pages/UploadEquipment";
import Profile from "./pages/Profile";
import BookingPage from "./pages/BookingPage";
import UserBooking from "./pages/UserBooking";

function App() {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:9191/user/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data);
          setLoadingUser(false);
        })
        .catch(() => {
          setUser(null);
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          setLoadingUser(false);
        });
    } else {
      setLoadingUser(false);
    }
  }, []);

  if (loadingUser) {
    return <div style={{ textAlign: "center", marginTop: "100px" }}>Loading...</div>;
  }

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<><LandingPage /><Footer /></>} />
        <Route path="/how-it-works" element={<HowItWork />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/uploadequipment" element={<UploadEquipment />} />
        <Route path="/AllEquipments" element={<AllEquipments />} />
        <Route path="/bookings" element={<UserBooking />} />
        <Route path="/equipment/:id" element={<EquipmentDetailsPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />

        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/signup" element={!user ? <SignupPage /> : <Navigate to="/" />} />

        <Route
          path="/owner"
          element={user?.role === "OWNER" ? <OwnerDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/renter"
          element={user?.role === "RENTER" ? <RenterDashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
