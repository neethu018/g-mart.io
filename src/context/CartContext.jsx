import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types';
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.productId === item.productId);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.productId === item.productId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.productId === item.productId);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.productId !== item.productId));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.productId === item.productId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

 
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  const getItemAmountSaved = (item) => {
    const discount = getItemDiscount(item);
    const discountedPrice = item.mrp - discount;
    return discount > 0 ? Math.round(discountedPrice) : Math.round(item.mrp);
  };
  
  const getTotalAmountSaved = () => {
    return Math.round(
      cartItems.reduce((total, item) => {
        const itemAmountToPay = getItemAmountSaved(item);
        return total + itemAmountToPay * item.quantity;
      }, 0)
    );
  };

  const getItemDiscount = (item) => {
    const discount = item.discount ? Math.round(item.mrp - (item.mrp * item.discount / 100)) : 0;
    return discount;
  };
  
const getTotalDiscount = () => {
  return cartItems.reduce((total, item) => {
    const itemDiscount = getItemDiscount(item);
    return total + itemDiscount * item.quantity;
  }, 0);
};

  const getTotalMRP = () => {
    return cartItems.reduce((total, item) => total + item.mrp * item.quantity, 0);
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalMRP,
        getTotalAmountSaved,
        getTotalDiscount,
        getItemAmountSaved,
        getItemDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};