import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/store";

const initialState = loadState("products") || {
  products: [],
  count: 0,
};


const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (!product) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: 1 ,
              userPrice: action.payload.price,
            },
          ],
        };
      }

      return state;
    },
    toggleProduct: (state, action) => {
      if (action.payload.type === "icrement") {
        const newProduct = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice: (item.price * (item.userCount + 1)).toFixed(2),
            };
          }

          return item;
        });

        return { ...state, products: newProduct };
      }
      if (action.payload.type === "decrement") {
        const newProduct = state.products.map((item) => {
          if (item.id === action.payload.id && item.userCount > 0) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: (item.price * (item.userCount - 1)).toFixed(2),
            };
          }

          return item;
        });

        return { ...state, products: newProduct };
      }
    },
    deleteItem: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
  },
});

export default cartReducer.reducer;

export const { add, toggleProduct, deleteItem } = cartReducer.actions;

