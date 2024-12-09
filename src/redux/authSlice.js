import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, error: null },
  reducers: {
    login: (state, action) => {
      // Save only the necessary data from the Firebase user object
      const { uid, email, displayName, accessToken } = action.payload;
      state.user = { uid, email, displayName, accessToken };
    },
    logout: (state) => {
      state.user = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { login, logout, setError } = authSlice.actions;
export default authSlice.reducer;
