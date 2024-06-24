import { ResolveFileUrlHook } from "./../../node_modules/rollup/dist/rollup.d";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/Product";
import { cartService } from "../services/cartService";
import { message } from "antd";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async () => {
    try {
      const res = await cartService.getItems();
      return res.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (product: Product) => {
    try {
      const res = await cartService.addItem(product);
      return res.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (id: number) => {
    await cartService.removeItem(id);
    message.success("Sản phẩm đã được xoá khỏi giỏ hàng");
    return id;
  }
);

export const { reducer: cartReducer, actions: cartActions } = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch cart items";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const item = action.payload;
        const existingItem = state.items.find((i) => i.id === item.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.items.push(item);
        }
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        const id = action.payload;
        state.items = state.items.filter((item) => item.id !== id);
      });
  },
});
