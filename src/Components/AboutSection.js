import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import handshake from '../images/handshake.png';

const AboutSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#7A982C' }}>
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT TEXT SECTION */}
          <div className="col-lg-6 text-white">

            <h1 className="fw-bold display-4 mb-4">What are we?</h1>

            <ul className="list-unstyled">
              <li className="mb-3">
                ✅ Community based platform, uniting farmers and farm equipment owners under one roof.
              </li>
              <li className="mb-3">
                ✅ Revolutionizing farming by enabling equipment owners to rent their idle gear directly to needy farmers, boosting affordability.
              </li>
              <li className="mb-3">
                ✅ Owners generate quick income by listing on our platform.
              </li>
              <li className="mb-3">
                ✅ Prospective renters access a diverse range of equipment for agriculture, landscaping, and more, offering a cost-effective alternative to ownership.
              </li>
              <li className="mb-3">
                ✅ Experience freedom, convenience, and localized availability with Haystackers.
              </li>
            </ul>

            <button className="btn btn-light mt-3 fw-semibold px-4 py-2">
              More About Us
            </button>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="col-lg-6 mt-5 mt-lg-0 position-relative">
            <img
              src= {handshake}
              alt="Handshake"
              className="img-fluid rounded"
            />

            {/* TOP BADGE */}
            <div className="position-absolute top-0 start-0 m-3 bg-light text-dark rounded px-3 py-2 shadow-sm fw-bold">
              1000+ <br />
              <span className="fw-normal">Happy Customers</span>
            </div>

            {/* BOTTOM BADGE */}
            <div className="position-absolute bottom-0 end-0 m-3 bg-light text-dark rounded px-3 py-2 shadow-sm fw-bold text-end">
              576+ <br />
              <span className="fw-normal">Farm Equipment</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
