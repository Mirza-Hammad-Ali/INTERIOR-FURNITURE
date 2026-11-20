
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("furniture-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  const [cartPopupProduct, setCartPopupProduct] = useState(null);

  useEffect(() => {
    localStorage.setItem("furniture-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product, quantity = 1) {
    const selectedOptions = product.selectedOptions || {};

    const variantKey = JSON.stringify(selectedOptions);

    const cartItem = {
      ...product,
      selectedOptions,
      variantKey,
      cartItemId: `${product.id}-${variantKey}`,
      quantity,
    };

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) =>
          item.id === product.id &&
          JSON.stringify(item.selectedOptions || {}) === variantKey
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.cartItemId === existingItem.cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...currentItems, cartItem];
    });

    setCartPopupProduct({
      ...cartItem,
      addedQuantity: quantity,
      popupKey: Date.now(),
    });
  }

  function closeCartPopup() {
    setCartPopupProduct(null);
  }

  function updateQuantity(cartItemId, quantity) {
    if (quantity < 1) return;

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        (item.cartItemId || item.id) === cartItemId
          ? { ...item, quantity }
          : item
      )
    );
  }

  function removeFromCart(cartItemId) {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => (item.cartItemId || item.id) !== cartItemId
      )
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartPopupProduct,
        closeCartPopup,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
