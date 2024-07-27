import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

createSlice({});

// Create reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "increase":
      return {
        ...state,
        counter: state.counter + action.value,
      };

    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };

    case "toggle":
      return {
        ...state,
        showCounter: !state.showCounter,
      };

    default:
      return state;
  }
};

// Create a store
const store = createStore(counterReducer);

export default store;
