
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  FiShoppingBag,
  FiMinus,
  FiPlus,
  FiArrowLeft,
  FiHeart,
  FiCheck,
  FiTruck,
  FiShield,
  FiAward,
  FiStar,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

import products from "../data/products";
import "./ProductDetails.css";

const sizeImages = {
  Single: "/images/bed-single.jpg",
  "Small Double": "/images/bed-small-double.jpg",
  Double: "/images/bed-double.jpg",
  King: "/images/bed-king.jpg",
};

const colorMap = {
  Steel: "#687783",
  Silver: "#BFC2C4",
  Grey: "#777777",
  Black: "#171717",
  Sapphire: "#174A91",
  White: "#F7F5EF",
  "Mustard Gold": "#C49A32",
  "Duck Egg": "#A8C9C5",
  Beige: "#D8C3A5",
  Teal: "#267C7B",
  Maroon: "#701F36",
  Pink: "#E5A3B5",
  Mink: "#A58B78",
  Brown: "#795548",
  Charcoal: "#414141",
  Purple: "#744A91",
  Red: "#C62828",
  Gold: "#C9A33B",
  "Denim Blue": "#426A91",
  Aubergine: "#51263E",
  Cream: "#F1E4C9",
  Blue: "#416B9B",
};

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const isCustomBed = Boolean(
    product?.sizes?.length && product?.fabrics?.length
  );

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0]?.name || ""
  );
  const [selectedFabric, setSelectedFabric] = useState(
    product?.fabrics?.[0]?.name || ""
  );
  const [selectedColor, setSelectedColor] = useState(
    product?.fabrics?.[0]?.colors?.[0] || ""
  );
  const [mattress, setMattress] = useState("Without Mattress");
  const [activeImage, setActiveImage] = useState(product?.image || "");

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <Link to="/shop">Back to Shop</Link>
      </div>
    );
  }

  const saved = isInWishlist(product.id);

  const currentSize = isCustomBed
    ? product.sizes.find((size) => size.name === selectedSize)
    : null;

  const currentPrice = isCustomBed
    ? mattress === "With Mattress"
      ? currentSize.withMattress
      : currentSize.withoutMattress
    : product.price;

  const selectedFabricData = isCustomBed
    ? product.fabrics.find((fabric) => fabric.name === selectedFabric)
    : null;

  const availableColors = selectedFabricData?.colors || [];

  const galleryImages = [
    product.image,
    ...(isCustomBed
      ? product.sizes.map((size) => sizeImages[size.name]).filter(Boolean)
      : []),
  ].filter((image, index, array) => array.indexOf(image) === index);

  function handleFabricChange(e) {
    const fabricName = e.target.value;
    setSelectedFabric(fabricName);

    const fabric = product.fabrics.find(
      (item) => item.name === fabricName
    );

    setSelectedColor(fabric?.colors?.[0] || "");
  }

  function handleAddToCart() {
    if (isCustomBed) {
      const customizedProduct = {
        ...product,
        price: currentPrice,
        selectedOptions: {
          size: `${currentSize.name} (${currentSize.dimension})`,
          fabric: selectedFabric,
          color: selectedColor,
          mattress,
        },
      };

      addToCart(customizedProduct, quantity);
    } else {
      addToCart(product, quantity);
    }
  }

  function handleWishlist() {
    if (saved) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

  return (
    <section className="product-details-page">
      <div className="product-details-container">

        <Link to="/shop" className="product-back-link">
          <FiArrowLeft />
          Back to Shop
        </Link>

        <div className="product-details-grid">

          {/* LEFT: Product Gallery */}
          <div className="product-gallery">
            <div className="product-details-image">
              <img
                src={activeImage}
                alt={product.name}
                className="main-product-image"
              />

              {product.badge && (
                <span className="product-details-badge">
                  {product.badge}
                </span>
              )}

              <button
                type="button"
                onClick={handleWishlist}
                aria-label="Add to wishlist"
                className={`gallery-wishlist ${saved ? "active" : ""}`}
              >
                <FiHeart className={saved ? "fill-heart" : ""} />
              </button>
            </div>

            <div className="product-gallery-thumbnails">
              {galleryImages.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  onClick={() => setActiveImage(image)}
                  className={`gallery-thumbnail ${
                    activeImage === image ? "selected" : ""
                  }`}
                  aria-label={`View product image ${index + 1}`}
                >
                  <img src={image} alt={`${product.name} view ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Information */}
          <div className="product-details-info">

            <span className="product-details-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <div className="product-rating">
              <span className="rating-stars">
                <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
              </span>
              <span>4.8 (124 reviews)</span>
            </div>

            <div className="product-details-price">
              <strong>£{currentPrice.toFixed(2)}</strong>

              {!isCustomBed && product.oldPrice > product.price && (
                <del>£{product.oldPrice.toFixed(2)}</del>
              )}
            </div>

            <p className="product-details-description">
              {product.description}
            </p>

            {isCustomBed && (
              <div className="product-customization">

                {/* Bed Sizes */}
                <div className="custom-option">
                  <label className="option-heading">
                    Select Bed Size
                  </label>

                  <div className="bed-size-grid">
                    {product.sizes.map((size) => {
                      const isSelected = selectedSize === size.name;

                      return (
                        <button
                          key={size.name}
                          type="button"
                          onClick={() => setSelectedSize(size.name)}
                          className={`bed-size-card ${
                            isSelected ? "selected" : ""
                          }`}
                        >
                          {isSelected && (
                            <span className="size-check">
                              <FiCheck />
                            </span>
                          )}

                          <div className="bed-size-image">
                            <img
                              src={sizeImages[size.name] || product.image}
                              alt={`${size.name} bed`}
                            />
                          </div>

                          <span className="bed-size-name">
                            {size.name}
                          </span>

                          <span className="bed-size-dimension">
                            {size.dimension}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Fabric */}
                <div className="custom-option">
                  <label htmlFor="bed-fabric" className="option-heading">
                    Select Fabric
                  </label>

                  <select
                    id="bed-fabric"
                    value={selectedFabric}
                    onChange={handleFabricChange}
                    className="fabric-select"
                  >
                    {product.fabrics.map((fabric) => (
                      <option key={fabric.name} value={fabric.name}>
                        {fabric.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Colour Swatches */}
                <div className="custom-option">
                  <div className="colour-heading-row">
                    <span className="option-heading">Select Colour</span>
                    <span className="selected-colour-name">
                      {selectedColor}
                    </span>
                  </div>

                  <div className="colour-swatches">
                    {availableColors.map((color) => {
                      const isSelected = selectedColor === color;

                      return (
                        <button
                          key={color}
                          type="button"
                          title={color}
                          aria-label={`Select ${color}`}
                          aria-pressed={isSelected}
                          onClick={() => setSelectedColor(color)}
                          className={`colour-swatch ${
                            isSelected ? "selected" : ""
                          }`}
                          style={{
                            backgroundColor: colorMap[color] || "#B8AFA3",
                          }}
                        >
                          {isSelected && <FiCheck />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Mattress */}
                <div className="custom-option">
                  <span className="option-heading">
                    Mattress Option
                  </span>

                  <div className="mattress-options">
                    {["Without Mattress", "With Mattress"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setMattress(option)}
                        className={`mattress-button ${
                          mattress === option ? "selected" : ""
                        }`}
                      >
                        {option}
                        {mattress === option && <FiCheck />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Summary */}
                <div className="selected-price-box">
                  <div>
                    <strong>Your selected price</strong>
                    <p>
                      {selectedSize} · {selectedFabric} · {selectedColor} · {mattress}
                    </p>
                  </div>

                  <strong className="selected-price-value">
                    £{currentPrice.toFixed(2)}
                  </strong>
                </div>
              </div>
            )}

            {/* Quantity and Cart */}
            <div className="product-purchase-row">
              <div className="product-quantity">
                <span>Quantity</span>

                <div className="quantity-controls">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    <FiMinus />
                  </button>

                  <strong>{quantity}</strong>

                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="product-add-cart-btn"
                onClick={handleAddToCart}
              >
                <FiShoppingBag />
                Add to Cart
              </button>

              <button
                type="button"
                onClick={handleWishlist}
                className={`product-wishlist-btn ${
                  saved ? "active" : ""
                }`}
              >
                <FiHeart className={saved ? "fill-heart" : ""} />
                {saved ? "Added to Wishlist" : "Add to Wishlist"}
              </button>
            </div>

            {/* Trust Features */}
            <div className="product-details-extra">
              <div>
                <FiTruck />
                <span>UK Delivery Available</span>
              </div>

              <div>
                <FiShield />
                <span>Secure Shopping</span>
              </div>

              <div>
                <FiAward />
                <span>Quality Furniture</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
