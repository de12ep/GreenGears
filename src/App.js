import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/Loginpage';
import AboutUs from './pages/AboutUs';
import HowItWork from './pages/how-it-works';
import LandingPage from './pages/LandingPage';
//import UploadEquipmentPage from './pages/UploadEquipment';
//import AllEquipments from './pages/EquipmentListPage'


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
      </Routes>
    </Router>
  );
}

export default App;
