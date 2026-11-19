
import { Link } from "react-router-dom";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiArrowLeft,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">
        <div className="cart-container cart-empty">
          <h1>Your Shopping Cart</h1>

          <div className="cart-empty-content">
            <span className="cart-empty-icon">🛍️</span>
            <h2>Your cart is empty</h2>
            <p>Discover beautiful furniture for your home.</p>

            <Link to="/shop" className="cart-continue-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-container">
        <div className="cart-heading">
          <div>
            <span>YOUR SELECTION</span>
            <h1>Your Shopping Cart</h1>
            <p>{cartItems.length} different products in your cart</p>
          </div>

          <Link to="/shop" className="cart-back-link">
            <FiArrowLeft /> Continue Shopping
          </Link>
        </div>

        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <Link
                  to={`/product/${item.id}`}
                  className="cart-item-image"
                >
                  <img src={item.image} alt={item.name} />
                </Link>

                <div className="cart-item-details">
                  <span>{item.category}</span>

                  <h3>
                    <Link to={`/product/${item.id}`}>
                      {item.name}
                    </Link>
                  </h3>

                  <strong>£{item.price.toFixed(2)}</strong>

                  <div className="cart-item-actions">
                    <div className="cart-quantity">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <FiMinus />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        aria-label="Increase quantity"
                      >
                        <FiPlus />
                      </button>
                    </div>

                    <button
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FiTrash2 /> Remove
                    </button>
                  </div>
                </div>

                <div className="cart-item-total">
                  £{(item.price * item.quantity).toFixed(2)}
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="cart-summary-row">
              <span>Subtotal</span>
              <strong>£{subtotal.toFixed(2)}</strong>
            </div>

            <div className="cart-summary-row">
              <span>Delivery</span>
              <strong>Calculated at checkout</strong>
            </div>

            <div className="cart-summary-total">
              <span>Total</span>
              <strong>£{subtotal.toFixed(2)}</strong>
            </div>

            <Link
              to="/checkout"
              className="cart-checkout-btn"
            >
              Proceed to Checkout
            </Link>

            <p className="cart-delivery-note">
              UK delivery available. Secure shopping guaranteed.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Cart;
