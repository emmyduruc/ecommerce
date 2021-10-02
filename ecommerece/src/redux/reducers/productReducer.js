import React from "react";
import { ActionTypes } from "../constants/action-types";

const initState = {
  products: [],
  cart: [],
  count: 0,
};
export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export const insertCart = (state = initState, { type, payload }) => {
  const incomingProduct = payload.payload;
  const incomingProductId = incomingProduct ? incomingProduct.id : "";
  switch (type) {
    case ActionTypes.INSERT_TO_CART:
      const existingProduct = state.cart.find((product) => {
        if (incomingProductId === product.id) {
          return true;
        }
        return false;
      });
      if (existingProduct) {
        return state;
      } else {
        return { ...state, products:[...incomingProduct] };
      }
    case ActionTypes.REMOVE_FROM_CART:
      const removeFromCart = state.cart.filter(
        (product) => product.id !== incomingProductId.id
      );
      return {
        ...state,
        cart: [...removeFromCart],
      };
    default:
      return state;
  }
};
export const increaseCartCount = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.INCREASE_CART_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
      case ActionTypes.DECREASE_CART_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
