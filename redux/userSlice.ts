import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.token = action.payload;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
