
import {
  FiTruck,
  FiShield,
  FiHeart,
  FiHeadphones,
} from "react-icons/fi";

import "./WhyChooseUs.css";

const features = [
  {
    icon: <FiTruck />,
    title: "UK-Wide Free Home Delivery",
    description:
      "Enjoy convenient furniture delivery across the United Kingdom.",
  },
  {
    icon: <FiShield />,
    title: "Quality Assured",
    description:
      "Carefully selected furniture made with quality and durability in mind.",
  },
  {
    icon: <FiHeart />,
    title: "Designed for Living",
    description:
      "Beautiful and practical designs that make every house feel like home.",
  },
  {
    icon: <FiHeadphones />,
    title: "Customer Support",
    description:
      "Our friendly team is here to help you with your furniture journey.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <div className="why-choose-heading">
          <span>THE INTERIOR DIFFERENCE</span>
          <h2>Why Choose Us</h2>
          <p>
            More than furniture, we bring comfort, quality and thoughtful
            design into your home.
          </p>
        </div>

        <div className="why-choose-grid">
          {features.map((feature, index) => (
            <div className="why-choose-card" key={index}>
              <div className="why-choose-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
