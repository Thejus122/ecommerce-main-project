

import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import productReducer
from "./slices/productSlice";

// LOAD CART FROM LOCALSTORAGE

const loadCart = () => {

  try {

    const savedCart =
      localStorage.getItem("cartItems");

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  } catch (error) {

    return [];

  }

};

// SAVE CART TO LOCALSTORAGE

const saveCart = (cartItems) => {

  try {

    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );

  } catch (error) {

    console.log(error);

  }

};

export const store = configureStore({
  reducer: {
    auth: authReducer,

    cart: cartReducer,

    products: productReducer,
  },

  preloadedState: {
    cart: {
      cartItems: loadCart(),
    },
  },

});

// SUBSCRIBE TO STORE

store.subscribe(() => {

  saveCart(
    store.getState().cart.cartItems
  );

});