
import "./FeaturedCategories.css";

const categories = [
  {
    id: 1,
    name: "Beds",
    description: "Comfort meets timeless design",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Wardrobes",
    description: "Elegant storage solutions",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Mattresses",
    description: "Discover better sleep",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Chest of Drawers",
    description: "Style meets functionality",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Dining Furniture",
    description: "Bring everyone together",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Sofas",
    description: "Relax in timeless comfort",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "Bunk Beds",
    description: "Smart comfort for every space",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
  },
];

function FeaturedCategories() {
  return (
    <section className="featured-categories" id="categories">
      <div className="categories-container">

        <div className="categories-heading">
          <span className="categories-eyebrow">
            EXPLORE OUR COLLECTION
          </span>

          <h2>
            Find Your Perfect
            <span> Furniture.</span>
          </h2>

          <p>
            Thoughtfully designed furniture to make
            every space feel beautifully yours.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <a
              href="#shop"
              className="category-card"
              key={category.id}
            >
              <div className="category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                  loading="lazy"
                />

                <span className="category-arrow">↗</span>
              </div>

              <div className="category-info">
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>

                <span className="category-number">
                  0{category.id}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedCategories;
