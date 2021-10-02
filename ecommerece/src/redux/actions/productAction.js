import React from "react";
import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProducts = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
export const insertCart = (products) => {
  return {
    type: "INSERT_TO_CART",
    payload: products,
  };
};
export const removeFromCart = (products) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: products,
  };
};
export const increaseCartCount = () => {
  return {
    type: "INCREASE_CART_COUNT",
  };
};

export const decreaseCartCount = () => {
  return {
    type: "DECREASE_CART_COUNT",
  };
};
