
import { FiStar, FiMessageSquare } from "react-icons/fi";
import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "London, UK",
    review:
      "Absolutely love my new bedroom furniture. The quality is excellent and the design is even more beautiful in person.",
    rating: 5,
    initial: "S",
  },
  {
    id: 2,
    name: "James Wilson",
    location: "Manchester, UK",
    review:
      "A wonderful shopping experience from start to finish. The furniture looks elegant and fits perfectly in my home.",
    rating: 5,
    initial: "J",
  },
  {
    id: 3,
    name: "Emily Brown",
    location: "Birmingham, UK",
    review:
      "Beautiful furniture, great value and a lovely collection. I will definitely be ordering again!",
    rating: 5,
    initial: "E",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-heading">
          <span>WHAT OUR CUSTOMERS SAY</span>
          <h2>Stories From Our Customers</h2>
          <p>
            We believe a beautiful home begins with furniture you love.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((item) => (
            <article className="testimonial-card" key={item.id}>
              <div className="testimonial-top">
                <FiMessageSquare className="testimonial-quote-icon" />
                <div className="testimonial-stars">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <FiStar key={index} fill="currentColor" />
                  ))}
                </div>
              </div>

              <p className="testimonial-review">"{item.review}"</p>

              <div className="testimonial-customer">
                <div className="testimonial-avatar">{item.initial}</div>
                <div>
                  <h3>{item.name}</h3>
                  <span>{item.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
