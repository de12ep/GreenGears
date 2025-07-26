import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const features = [
  {
    icon: "🛡️",
    title: "Insurance Coverage",
    subtitle: "On Every Rental",
    bgColor: "#f0f4ff",
    color: "#1a73e8"
  },
  {
    icon: "🧑‍💻",
    title: "Top Rated Support",
    subtitle: "In Real Time",
    bgColor: "#fff4dc",
    color: "#d97706"
  },
  {
    icon: "✅",
    title: "Verified",
    subtitle: "Owners and Renters",
    bgColor: "#e0f8e9",
    color: "#10b981"
  },
  {
    icon: "💰",
    title: "Earn Money",
    subtitle: "On Your Idle Equipment",
    bgColor: "#ffe4e4",
    color: "#ef4444"
  },
];

const FeatureCards = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {features.map((feature, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <div
              className="text-center p-4 rounded"
              style={{ backgroundColor: feature.bgColor }}
            >
              <div style={{ fontSize: "2.5rem" }}>{feature.icon}</div>
              <h5 className="fw-bold mt-3" style={{ color: feature.color }}>
                {feature.title}
              </h5>
              <p className="text-dark">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
