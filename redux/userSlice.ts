import { createSlice } from '@reduxjs/toolkit';
import api from '../api';

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

export const userLogin = (form: any) => async (dispatch: any) => {
  try {
    const {
      data: { token },
    } = await api.login(form);
    if (token) {
      dispatch(login(token));
    }
  } catch (e) {
    alert('Wrong user/password');
  }
};

export default userSlice.reducer;
