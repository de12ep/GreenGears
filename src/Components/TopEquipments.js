import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import tractorImg from '../images/tractor2.avif';
import harvesterImg from '../images/harvestor.png';

const TopEquipments = () => {
  const cardStyle = {
    height: '300px',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '0.5rem',
  };

  const imgStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: 'white',
    padding: '1rem',
  };

  return (
    <div className="container py-5 text-center">
      <h1 className="text-uppercase fw-bold text-success">
        Agricultural Equipment Rentals for All Your Farm Needs
      </h1>
      <h2 className="fw-bold mt-2 mb-3">
        Top <span className="text-success">5 equipment</span> you can’t do without!
      </h2>
      <p className="text-secondary mb-5">
        Uncover the pillars of farming success. Our quintessential top 5 equipment categories.
      </p> 

      <div className="row justify-content-center g-4">
        <div className="col-md-5">
          <div className="card shadow-sm border-0" style={cardStyle}>
            <img src={tractorImg} alt="Tractor" style={imgStyle} />
            <div style={overlayStyle}>
              <h4 className="fw-bold mb-1">Tractor</h4>
              <p className="mb-0">Starting from: <strong>2000</strong>/Day</p>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="card shadow-sm border-0" style={cardStyle}>
            <img src={harvesterImg} alt="Harvester" style={imgStyle} />
            <div style={overlayStyle}>
              <h4 className="fw-bold mb-1">Harvester</h4>
              <p className="mb-0">Starting from: <strong>3000</strong>/Day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopEquipments;
