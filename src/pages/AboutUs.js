import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';

const AboutUs = () => {
  return (
    <>
      <div className="container py-5">
        <h1 className="text-center text-success mb-4 fw-bold">About GreenGear</h1>
        <p className="text-center text-secondary mb-5">
          Empowering Indian farmers through affordable equipment rentals and smart agriculture solutions.
        </p>

        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1580974928062-dc3d3f7dca58?auto=format&fit=crop&w=800&q=80"
              className="img-fluid rounded shadow"
              alt="Our Mission"
            />
          </div>
          <div className="col-md-6">
            <h3 className="text-success">Our Mission</h3>
            <p>
              At GreenGear, our mission is to bridge the gap between traditional farming and modern technology.
              We provide easy access to essential farming equipment like tractors, harvesters, and tools,
              all at affordable rental prices. We believe in growing together with our farmers.
            </p>
          </div>
        </div>

        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1602524202273-01e97c7d4ba6?auto=format&fit=crop&w=800&q=80"
              className="img-fluid rounded shadow"
              alt="Vision"
            />
          </div>
          <div className="col-md-6">
            <h3 className="text-success">Our Vision</h3>
            <p>
              To revolutionize Indian agriculture by making cutting-edge equipment accessible to every farmer.
              Our vision is a self-reliant rural India where technology and tradition work hand in hand.
            </p>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=80"
              className="img-fluid rounded shadow"
              alt="Team"
            />
          </div>
          <div className="col-md-6">
            <h3 className="text-success">Our Team</h3>
            <p>
              GreenGear is powered by passionate professionals, engineers, and agriculture experts
              who understand the needs of farmers. We are committed to creating solutions that matter.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
