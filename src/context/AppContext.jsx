import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import { useNavigate } from 'react-router-dom';

// Create a context for authentication, cart, and wishlist
const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};

// AppProvider component to wrap the entire application with the context
export const AppProvider = ({ children, navigate }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [totalitemsincart,settotalitemsincart]=useState(null);
  //   const navigate = useNavigate();

  //get current user
  const getCurrentUser = ()=>{
    const localStorageUsers = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUser = localStorageUsers.find(user => user.token !== null);
    console.log("loggged in user :",loggedInUser);
    setCurrentUser(loggedInUser);
    return loggedInUser
  }
  // Function to generate a unique token
  const generateToken = () => {
    return Math.random().toString(36).substring(7);
  };

  // Function to perform user login
  const loginUser = (email, password) => {
    // Validate input fields
    if (!email || !password) {
      alert("Please enter email and password");
      return null;
    }
    // Check if the user exists
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = existingUsers.findIndex(
      (user) => user.email === email && user.password === password
    );

    if (userIndex === -1) {
      alert("Invalid email or password");
      return null;
    }

    // Set a token for the logged-in user
    const token = uuidv4(); // Use uuidv4 to generate a unique token
    const updatedUsers = [...existingUsers];
    updatedUsers[userIndex] = { ...updatedUsers[userIndex], token };
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setCurrentUser(updatedUsers[userIndex]);
    getCartItems();
    return updatedUsers[userIndex];
  };
  // Function to perform user signup
  const signUpUser = (name, email, password) => {
    // Validate if the user already exists
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some((user) => user.email === email);

    if (userExists) {
      return null; // User with this email already exists
    }

    // Create a new user with a unique ID and token
    const newUser = {
      id: uuidv4(),
      name,
      email,
      password,
      token: generateToken(),
    };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setCurrentUser(newUser);
    return newUser;
  };

  // Function to log out the current user
  const logoutUser = () => {
    if (currentUser) {
      // Get the existing users from local storage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Find the current user in the array
      const currentUserIndex = existingUsers.findIndex(
        (user) => user.id === currentUser.id
      );

      if (currentUserIndex !== -1) {
        // Remove the token from the user object
        existingUsers[currentUserIndex].token = null;

        // Update the users array in local storage
        localStorage.setItem("users", JSON.stringify(existingUsers));
      }

      // Clear the current user
      setCurrentUser(null);
      setCartItems([]);
      setFavouriteItems([]);
      window.location.reload()
    } else {
      console.error("User not logged in.");
    }
  };

  // Function to get the cart items for the current user
  const getCartItems = () => {
    setCartItems(
      currentUser
        ? JSON.parse(localStorage.getItem(`cart_${currentUser.id}`)) || []
        : []
    );
    
    return cartItems;
  };

  // Function to get the wishlist items for the current user
  const getWishlistItems = () => {
    setFavouriteItems(currentUser
      ? JSON.parse(localStorage.getItem(`wishlist_${currentUser.id}`)) || []
      : []);
    return favouriteItems
  };

  // Function to add an item to the carts
  const addToCart = (item) => {
    if (currentUser) {
      const existingCart =
        JSON.parse(localStorage.getItem(`cart_${currentUser.id}`)) || [];
      const isItemInCart = existingCart.find(
        (cartItem) => cartItem.productId === item.productId
      );

      if (isItemInCart) {
        // If the item is already in the cart, update the quantity
        const updatedCart = existingCart.map((cartItem) =>
          cartItem.productId === item.productId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        localStorage.setItem(
          `cart_${currentUser.id}`,
          JSON.stringify(updatedCart)
        );
        getCartItems();
      } else {
        // If the item is not in the cart, add it with quantity 1
        const updatedCart = [...existingCart, { ...item, quantity: 1 }];
        localStorage.setItem(
          `cart_${currentUser.id}`,
          JSON.stringify(updatedCart)
        );
        getCartItems();
      }
    } else {
      console.error("User not logged in.");
      navigate("/loginsignup");
    }
  };
// Function to add an item to the wishlist
const addToWishlist = (item) => {
  if (currentUser) {
    const wishlistKey = `wishlist_${currentUser.id}`;
    const existingWishlist = JSON.parse(localStorage.getItem(wishlistKey)) || [];

    // Check if the item is already in the wishlist
    const isItemInWishlist = existingWishlist.some(
      (wishlistItem) => wishlistItem.productId === item.productId
    );

    if (isItemInWishlist) {
      // If the item is already in the wishlist, remove it
      const updatedWishlist = existingWishlist.filter(
        (wishlistItem) => wishlistItem.productId !== item.productId
      );
      localStorage.setItem(wishlistKey, JSON.stringify(updatedWishlist));
    } else {
      // If the item is not in the wishlist, add it
      existingWishlist.push(item);
      localStorage.setItem(wishlistKey, JSON.stringify(existingWishlist));
    }

    // Update the wishlist items in the context
    getWishlistItems();
  } else {
    console.error("User not logged in.");
  }
};
// Function to check if a product is in the wishlist
const isLikedWishItems = (productId) => {
  // getCurrentUser()
  if (currentUser) {
    const wishlistKey = `wishlist_${currentUser.id}`;
    const existingWishlist = JSON.parse(localStorage.getItem(wishlistKey)) || [];

    // Check if the product with the given productId is in the wishlist
    return existingWishlist.some((wishlistItem) => wishlistItem.productId === productId);
  }

  return false; // Return false if the user is not logged in
};

  // Function to clear the cart and wishlist for the current user
  const clearCart = () => {
    if (currentUser) {
      localStorage.removeItem(`cart_${currentUser.id}`);
      setCartItems([]);
    } else {
      console.error("User not logged in.");
    }
  };
  const clearWishlist = () => {
    if (currentUser) {
      localStorage.removeItem(`wishlist_${currentUser.id}`);
      setFavouriteItems([])
    } else {
      console.error("User not logged in.");
    }
  };
  // Function to remove an item from the cart
  const removeFromCart = (item) => {
    if (currentUser) {
      const existingCart =
        JSON.parse(localStorage.getItem(`cart_${currentUser.id}`)) || [];
      const isItemInCart = existingCart.find(
        (cartItem) => cartItem.productId === item.productId
      );

      if (isItemInCart && isItemInCart.quantity === 1) {
        // If the item is in the cart with quantity 1, remove it from the cart
        const updatedCart = existingCart.filter(
          (cartItem) => cartItem.productId !== item.productId
        );
        localStorage.setItem(
          `cart_${currentUser.id}`,
          JSON.stringify(updatedCart)
        );
        getCartItems();
      } else if (isItemInCart) {
        // If the item is in the cart with quantity more than 1, decrement the quantity
        const updatedCart = existingCart.map((cartItem) =>
          cartItem.productId === item.productId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        localStorage.setItem(
          `cart_${currentUser.id}`,
          JSON.stringify(updatedCart)
        );
        getCartItems();
      } else {
        // If the item is not in the cart, do nothing
        console.error("Item not found in the cart.");
      }
    } else {
      console.error("User not logged in.");
    }
  };

  //cart page functionality
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  const getTotalMRP = () => {
    return cartItems.reduce(
      (total, item) => total + item.mrp * item.quantity,
      0
    );
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

  useEffect(() => {
    // Function to run when the component mounts
    const handleWindowLoad = () => {
      // Perform actions you want to run on window load
      getCartItems();
      getTotalItems()
      getCurrentUser()
      // Add other function calls as needed
    };

    // Attach the event listener to the window.onload event
    window.addEventListener('load', handleWindowLoad);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };
  }, [currentUser]);
  // Create the context value
  const contextValue = {
    currentUser,
    setCurrentUser,
    cartItems,
    favouriteItems,
    loginUser,
    signUpUser,
    logoutUser,
    getCartItems,
    getWishlistItems,
    isLikedWishItems,
    addToCart,
    addToWishlist,
    clearCart,
    clearWishlist,
    removeFromCart,
    getTotalItems,
    getTotalMRP,
    getTotalAmountSaved,
    getTotalDiscount,
    getItemAmountSaved,
    getItemDiscount,
    totalitemsincart,
    getCurrentUser,
    
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
