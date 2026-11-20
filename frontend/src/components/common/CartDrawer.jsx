
import { Link } from "react-router-dom";
import { FiX, FiCheck, FiShoppingBag, FiArrowRight } from "react-icons/fi";

import { useCart } from "../../context/CartContext";
import products from "../../data/products";

function CartDrawer() {
  const {
    cartPopupProduct,
    closeCartPopup,
    addToCart,
  } = useCart();

  const isOpen = Boolean(cartPopupProduct);

  if (!cartPopupProduct) {
    return null;
  }

  const relatedProducts = products
    .filter((product) => product.id !== cartPopupProduct.id)
    .sort((a, b) => {
      if (a.category === cartPopupProduct.category) return -1;
      if (b.category === cartPopupProduct.category) return 1;
      return 0;
    })
    .slice(0, 3);

  const formatPrice = (price) =>
    `£${Number(price || 0).toFixed(2)}`;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Background Overlay */}
      <button
        type="button"
        aria-label="Close shopping bag"
        onClick={closeCartPopup}
        className={`absolute inset-0 h-full w-full bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-[480px] flex-col bg-[#FAF8F4] shadow-2xl transition-transform duration-300 ease-in-out sm:w-[480px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E9E3D9] px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E9EDE5] text-[#4B5142]">
              <FiCheck size={19} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#29251F]">
                Added to your bag
              </h2>
              <p className="text-xs text-[#777064]">
                Your item is ready for checkout
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeCartPopup}
            aria-label="Close drawer"
            className="rounded-full p-2 text-[#514B40] transition hover:bg-[#E9E3D9]"
          >
            <FiX size={23} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <p className="mb-5 text-sm leading-6 text-[#514B40]">
            <span className="font-semibold text-[#29251F]">
              {cartPopupProduct.name}
            </span>{" "}
            was added to your shopping bag.
          </p>

          {/* Added Product */}
          <div className="flex gap-4 border-b border-[#E9E3D9] pb-6">
            <div className="h-28 w-28 shrink-0 overflow-hidden bg-[#F0EDE6]">
              <img
                src={cartPopupProduct.image}
                alt={cartPopupProduct.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              <p className="mb-1 text-xs uppercase tracking-wider text-[#8A806F]">
                {cartPopupProduct.category}
              </p>

              <h3 className="text-sm font-semibold text-[#29251F]">
                {cartPopupProduct.name}
              </h3>

              <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#777064]">
                {cartPopupProduct.description}
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-2 pt-3">
                <span className="text-sm font-semibold text-[#29251F]">
                  {formatPrice(cartPopupProduct.price)}
                </span>

                {cartPopupProduct.oldPrice > cartPopupProduct.price && (
                  <span className="text-xs text-[#999084] line-through">
                    {formatPrice(cartPopupProduct.oldPrice)}
                  </span>
                )}
              </div>

              <p className="mt-1 text-xs text-[#777064]">
                Quantity: {cartPopupProduct.addedQuantity}
              </p>
            </div>
          </div>

          {/* Recommendations */}
          <div className="pt-7">
            <h3 className="mb-5 font-serif text-2xl text-[#29251F]">
              You might also like
            </h3>

            <div className="space-y-5">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 border-b border-[#E9E3D9] pb-5"
                >
                  <Link
                    to={`/product/${product.id}`}
                    onClick={closeCartPopup}
                    className="h-24 w-24 shrink-0 overflow-hidden bg-[#F0EDE6]"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-300 hover:scale-105"
                    />
                  </Link>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <p className="text-[10px] uppercase tracking-wider text-[#8A806F]">
                      {product.category}
                    </p>

                    <Link
                      to={`/product/${product.id}`}
                      onClick={closeCartPopup}
                      className="mt-1 text-sm font-semibold text-[#29251F] hover:text-[#A17C50]"
                    >
                      {product.name}
                    </Link>

                    <p className="mt-1 line-clamp-1 text-xs text-[#777064]">
                      {product.description}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
                      <span className="text-sm font-semibold text-[#29251F]">
                        {formatPrice(product.price)}
                      </span>

                      {product.oldPrice > product.price && (
                        <span className="text-xs text-[#999084] line-through">
                          {formatPrice(product.oldPrice)}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="mt-2 w-fit border-b border-[#514B40] pb-0.5 text-xs font-semibold text-[#514B40] transition hover:text-[#A17C50]"
                    >
                      Add to bag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="border-t border-[#E9E3D9] bg-[#FAF8F4] px-6 py-5">
          <Link
            to="/cart"
            onClick={closeCartPopup}
            className="flex w-full items-center justify-center gap-2 bg-[#514B40] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#3E392F]"
          >
            <FiShoppingBag size={17} />
            Go to Shopping Bag
            <FiArrowRight size={17} />
          </Link>

          <button
            type="button"
            onClick={closeCartPopup}
            className="mt-3 w-full border border-[#514B40] px-6 py-4 text-sm font-semibold text-[#514B40] transition hover:bg-[#E9E3D9]"
          >
            Continue Shopping
          </button>
        </div>
      </aside>
    </div>
  );
}

export default CartDrawer;
