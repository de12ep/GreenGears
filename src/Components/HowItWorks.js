import React from "react";

const steps = [
  {
    emoji: "🚜",
    title: "Locate the right Farm Equipment",
    text: "Your perfect farm equipment is not far from your fingertips. You can begin by choosing from the large list of what is available in the market depending on your farming needs. It’s that simple!",
  },
  {
    emoji: "📅",
    title: "Book Your Equipment",
    text: "Liked something? Send a request. Ask questions. Additional attachments should be bundled together with them if necessary. Turn your dream farm project into a remarkably simplified process.",
  },
  {
    emoji: "👍",
    title: "Pickup Or Get It Delivered",
    text: "Offering both pickup and delivery options to deliver your farming needs quickly and efficiently at your doorstep.",
  },
  {
    emoji: "🌾",
    title: "Hit The Farm!",
    text: "Hit the farm and cultivate your land in style, your tractor and all other farming implements are well protected by our episodic insurance.",
  },
  {
    emoji: "↩️",
    title: "Return",
    text: "After you’re done making your dream project, make sure you return the equipment to its owner as you found in the condition you rented it.",
  },
];

export default function HowItWorks() {
  return (
    <div className="container py-5">
      <p className="text-uppercase text-success fw-semibold text-center mb-2">
        Renting a Tractor, Attachment, or Equipment is Easy
      </p>
      <h2 className="text-center fw-bold display-5 mb-5">
        <span className="text-success">How</span> It Works
      </h2>

      <div className="row row-cols-1 row-cols-md-2 g-5">
        {steps.map((step, index) => (
          <div key={index} className="col">
            <div className="d-flex">
              <div className="fs-2 me-3">{step.emoji}</div>
              <div>
                <h5 className="fw-bold">{step.title}</h5>
                <p className="text-muted mb-0">{step.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
