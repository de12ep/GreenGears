import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import tractor from '../images/tractorHeroSection.jpg';
import { useNavigate } from 'react-router-dom';
 
const HeroSection = () => {
   const navigate = useNavigate();
  const sectionStyle = {
    backgroundImage: `url(${tractor})` ,
    
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '75vh',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    padding: '40px 20px',
  };

const searchEquipment = ()=>{
   navigate('/AllEquipments')
}

  return (
    <div style={sectionStyle}>
      <div className="container">
        <div >
          <p className=" mb-1 fw-bold" style={{ borderRadius: '10px' }}>
            Book a Tractor, Attachment, or Any Other Equipment
          </p>
          <h1 className="display-4 fw-bold">The Future of Farming</h1>
          <p className="lead fw-light">
            Effortlessly access top agricultural and industrial equipment with GreenGear. <br></br>
             Join us in shaping the future!
          </p>
          <button  onClick={searchEquipment} className="btn btn-light mt-3 fw-semibold px-4 py-2">See All Equipments</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
