import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiLock, FiTruck } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/order-success", {
      state: {
        total: subtotal,
      },
    });

    clearCart();
  }

  if (cartItems.length === 0) {
    return (
      <section className="min-h-[65vh] bg-[#faf8f4] px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-3xl text-[#29251f]">
            Your cart is empty
          </h1>

          <p className="mt-4 text-[#777064]">
            Add some beautiful furniture before proceeding to checkout.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex bg-[#514b40] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#3d392f]"
          >
            Explore Collection
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#faf8f4] px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/cart"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[#514b40] transition hover:text-[#a17c50]"
        >
          <FiArrowLeft />
          Back to Cart
        </Link>

        <div className="mb-10">
          <span className="text-xs font-semibold tracking-[3px] text-[#a17c50]">
            COMPLETE YOUR PURCHASE
          </span>

          <h1 className="mt-3 font-serif text-4xl text-[#29251f] sm:text-5xl">
            Checkout
          </h1>

          <p className="mt-3 text-sm text-[#777064]">
            Just a few details before your furniture arrives home.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_390px]"
        >
          {/* Delivery Information */}
          <div className="space-y-8">
            <div className="border border-[#e9e3d9] bg-white p-6 sm:p-8">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center bg-[#f5f1e9] text-[#514b40]">
                  <FiTruck size={21} />
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-[#29251f]">
                    Delivery Information
                  </h2>

                  <p className="mt-1 text-xs text-[#888176]">
                    Enter your UK delivery details.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-[#514b40]">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                    autoComplete="name"
                    className="w-full border border-[#e9e3d9] bg-[#faf8f4] px-4 py-3 text-sm outline-none transition focus:border-[#a17c50]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#514b40]">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    required
                    autoComplete="email"
                    className="w-full border border-[#e9e3d9] bg-[#faf8f4] px-4 py-3 text-sm outline-none transition focus:border-[#a17c50]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#514b40]">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    required
                    autoComplete="tel"
                    className="w-full border border-[#e9e3d9] bg-[#faf8f4] px-4 py-3 text-sm outline-none transition focus:border-[#a17c50]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-[#514b40]">
                    Street Address *
                  </label>

                  <input
                    type="text"
                    name="address"
                    placeholder="House number and street name"
                    required
                    autoComplete="address-line1"
                    className="w-full border border-[#e9e3d9] bg-[#faf8f4] px-4 py-3 text-sm outline-none transition focus:border-[#a17c50]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-[#514b40]">
                    Apartment, Suite, etc. (Optional)
                  </label>

                  <input
                    type="text"
                    name="addressLine2"
                    placeholder="Apartment, flat, unit, etc."
                    autoComplete="address-line2"
                    className="w-full border border-[#e9e3d9] bg-[#faf8f4] px-4 py-3 text-sm outline-none transition focus:border-[#a17c50]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#514b40]">
                    Town / City *
                  </label>

                  <input
                    type="text"
                    name="city"
                    placeholder="Enter town or city"
                    required
                    autoComplete="address-level2"
                    className="w-full border border-[#e9e3d9] bg-[#faf8f4] px-4 py-3 text-sm outline-none transition focus:border-[#a17c50]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#514b40]">
                    Postcode *
                  </label>

                  <input
                    type="text"
                    name="postcode"
                    placeholder="e.g. SW1A 1AA"
                    required
                    autoComplete="postal-code"
                    className="w-full border border-[#e9e3d9] bg-[#faf8f4] px-4 py-3 text-sm uppercase outline-none transition focus:border-[#a17c50]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-[#514b40]">
                    Country *
                  </label>

                  <select
                    name="country"
                    defaultValue="United Kingdom"
                    required
                    autoComplete="country-name"
                    className="w-full border border-[#e9e3d9] bg-[#faf8f4] px-4 py-3 text-sm outline-none transition focus:border-[#a17c50]"
                  >
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-[#514b40]">
                    Order Notes (Optional)
                  </label>

                  <textarea
                    name="notes"
                    rows="4"
                    placeholder="Any special delivery instructions..."
                    className="w-full resize-none border border-[#e9e3d9] bg-[#faf8f4] px-4 py-3 text-sm outline-none transition focus:border-[#a17c50]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="border border-[#e9e3d9] bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-[#29251f]">
                Payment Method
              </h2>

              <div className="mt-6 border border-[#a17c50] bg-[#faf8f4] p-5">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    defaultChecked
                    className="mt-1 accent-[#514b40]"
                  />

                  <span>
                    <strong className="block text-sm text-[#29251f]">
                      Cash on Delivery (COD)
                    </strong>

                    <span className="mt-1 block text-xs leading-6 text-[#777064]">
                      Pay when your furniture is delivered to your address.
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <aside className="border border-[#e9e3d9] bg-white p-6 sm:p-8 lg:sticky lg:top-8">
            <h2 className="font-serif text-2xl text-[#29251f]">Your Order</h2>

            <div className="mt-6 space-y-5">
              {cartItems.map((item) => {
                const options = item.selectedOptions || {};
                const itemKey = item.cartItemId || item.id;

                return (
                  <div
                    key={itemKey}
                    className="flex gap-4 border-b border-[#eee9e1] pb-5"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 shrink-0 object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-medium text-[#29251f]">
                        {item.name}
                      </h3>

                      {options.size && (
                        <p className="mt-2 text-xs text-[#777064]">
                          <strong>Size:</strong> {options.size}
                        </p>
                      )}

                      {options.fabric && (
                        <p className="mt-1 text-xs text-[#777064]">
                          <strong>Fabric:</strong> {options.fabric}
                        </p>
                      )}

                      {options.color && (
                        <p className="mt-1 text-xs text-[#777064]">
                          <strong>Colour:</strong> {options.color}
                        </p>
                      )}

                      {options.mattress && (
                        <p className="mt-1 text-xs text-[#777064]">
                          <strong>Mattress:</strong> {options.mattress}
                        </p>
                      )}

                      <p className="mt-2 text-xs text-[#888176]">
                        Quantity: {item.quantity}
                      </p>

                      <strong className="mt-2 block text-sm text-[#514b40]">
                        £{(item.price * item.quantity).toFixed(2)}
                      </strong>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-sm text-[#777064]">
                <span>Subtotal</span>

                <strong className="text-[#29251f]">
                  £{subtotal.toFixed(2)}
                </strong>
              </div>

              <div className="flex justify-between text-sm text-[#777064]">
                <span>Delivery</span>

                <span className="text-right text-xs text-[#888176]">
                  To be confirmed
                </span>
              </div>

              <div className="border-t border-[#e9e3d9] pt-5">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#29251f]">
                    Order Subtotal
                  </span>

                  <strong className="font-serif text-2xl text-[#514b40]">
                    £{subtotal.toFixed(2)}
                  </strong>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 flex w-full items-center justify-center gap-2 bg-[#514b40] px-5 py-4 text-sm font-semibold tracking-wide text-white transition duration-300 hover:bg-[#3d392f]"
            >
              <FiLock />
              Place Order
            </button>

            <p className="mt-4 text-center text-xs leading-6 text-[#888176]">
              Your order will use Cash on Delivery.
            </p>
          </aside>
        </form>
      </div>
    </section>
  );
}

export default Checkout;
