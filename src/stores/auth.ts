import {
  CaseReducerActions,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { User } from "../types/User";
import { authService } from "../services/authService";

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const getUserAction = createAsyncThunk(
  "auth/getUser",
  async (_, thunkAPi) => {
    try {
      const res = await authService.getUser();
      localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    } catch (err) {
      console.log("err", err);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data: { username: string; password: string }, thunkAPI) => {
    try {
      const res = await authService.login(data);
      const user = await res.data;
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } catch (err) {
      console.log("err", err);
    }
  }
);

export const { reducer: authReducer, actions: authActions } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builders) => {
    builders.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builders.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builders.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});
