import { createSlice } from '@reduxjs/toolkit';
import api from '../api';
import { setFav, setFavs } from './roomSlice';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    token: null,
    id: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.id = action.payload.id;
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
      data: { id, token },
    } = await api.login(form);
    if (token && id) {
      dispatch(login({ token, id }));
    }
  } catch (e) {
    alert('Wrong user/password');
  }
};

export const getFavs = () => async (dispatch, getState) => {
  const {
    userReducer: { id, token },
  } = getState();
  try {
    const { data } = await api.favs(id, token);
    dispatch(setFavs(data));
  } catch (e) {
    console.log(e);
  }
};

export const toggleFav = (roomId) => async (dispatch, getState) => {
  const {
    userReducer: { id, token },
  } = getState();
  dispatch(setFav({ roomId }));
  try {
    await api.toggleFav(id, roomId, token);
  } catch (e) {
    console.log(e);
  }
};

export default userSlice.reducer;
