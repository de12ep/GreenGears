import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { PrivateRoute } from "./Components/PrivateRoutes";
import AllEquipments from "./pages/EquipmentListPage";
import EquipmentDetailsPage from "./pages/EquipmentDetailPage";
import UploadEquipment from "./pages/UploadEquipment";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:9191/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data))
        .catch(() => setUser(null));
    }
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<><LandingPage /><Footer /></>} />
        <Route path="/how-it-works" element={<HowItWork />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/uploadequipment" element={<UploadEquipment />} />
        <Route path="/AllEquipments" element={<AllEquipments />} />
        <Route path="/equipment/:id" element={<EquipmentDetailsPage />} />
        <Route path="/renter" element={<PrivateRoute allowedRole="RENTER"><RenterDashboard /></PrivateRoute>} />
        <Route path="/owner" element={<PrivateRoute allowedRole="OWNER"><OwnerDashboard /></PrivateRoute>} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
