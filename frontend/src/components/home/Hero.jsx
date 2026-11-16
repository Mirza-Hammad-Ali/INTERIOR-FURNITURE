
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <span className="hero-eyebrow">
          ELEVATE YOUR LIVING SPACE
        </span>

        <h1>
          Furniture That
          <br />
          Makes a House
          <br />
          <span>Feel Like Home.</span>
        </h1>

        <p className="hero-description">
          Discover beautifully crafted furniture designed
          to bring comfort, character and timeless elegance
          into every corner of your home.
        </p>

        <div className="hero-buttons">
          <a href="#shop" className="hero-primary-button">
            SHOP COLLECTION
            <span>→</span>
          </a>

          <a href="#about" className="hero-secondary-button">
            DISCOVER OUR STORY
          </a>
        </div>

        <div className="hero-highlights">
          <div className="hero-highlight">
            <span className="highlight-number">01</span>
            <span>Premium Quality</span>
          </div>

          <div className="hero-highlight">
            <span className="highlight-number">02</span>
            <span>UK Delivery</span>
          </div>

          <div className="hero-highlight">
            <span className="highlight-number">03</span>
            <span>Timeless Design</span>
          </div>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
          alt="Elegant luxury living room with premium furniture"
          className="hero-image"
        />

        <div className="hero-image-label">
          <span>THE ART OF LIVING</span>
          <p>Comfort meets elegance.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
