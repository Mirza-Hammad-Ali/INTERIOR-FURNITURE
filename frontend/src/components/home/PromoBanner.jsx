
import "./PromoBanner.css";

function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="promo-banner-content">
        <span className="promo-banner-label">MAKE YOUR HOME BEAUTIFUL</span>

        <h2>
          Comfort Meets
          <br />
          Timeless Design
        </h2>

        <p>
          Discover beautifully crafted furniture that brings comfort,
          elegance and character to every corner of your home.
        </p>

        <a href="/shop" className="promo-banner-btn">
          Shop Collection <span>→</span>
        </a>
      </div>
    </section>
  );
}

export default PromoBanner;
