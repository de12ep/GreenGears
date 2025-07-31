import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/Loginpage';
import AboutUs from './pages/AboutUs';
import HowItWork from './pages/how-it-works';
import LandingPage from './pages/LandingPage';


import OwnerDashboard from "./pages/OwnerDashboard";
import RenterDashboard from "./pages/RenterDashboard";
import { PrivateRoute } from "./Components/PrivateRoutes";
import AllEquipments from './pages/EquipmentListPage'
import EquipmentDetailsPage from './pages/EquipmentDetailPage';
import UploadEquipment from "./pages/UploadEquipment";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
             <LandingPage />
              <Footer />
            </>
          }
        />
         
        {/* Other page */}
        <Route path="/how-it-works" element={<HowItWork />} />
        <Route path="/signup" element={<SignupPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/about" element={<AboutUs />} />
         <Route path="/uploadequipment" element={<UploadEquipment />} />
          <Route path="/login" element={<LoginPage />} />
         <Route path="/AllEquipments" element={<AllEquipments />} />
           <Route path="/equipment/:id" element={<EquipmentDetailsPage />} />
           <Route
          path="/renter"
          element={
            <PrivateRoute allowedRole="RENTER">
              <RenterDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/owner"
          element={
            <PrivateRoute allowedRole="OWNER">
              <OwnerDashboard />
            </PrivateRoute>
          }
        />

        
      </Routes>
    </Router>
  );
}

export default App;
