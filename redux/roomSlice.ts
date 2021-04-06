import { createSlice } from '@reduxjs/toolkit';
import api from '../api';

const roomSlice = createSlice({
  name: 'room',
  initialState: {
    explore: {
      rooms: [],
      page: 1,
    },
    favs: [],
  },
  reducers: {
    setExploreRooms: (state, action) => {
      const { payload } = action;
      if (payload.page === 1) {
        state.explore.rooms = payload.rooms;
        state.explore.page = 1;
      } else {
        state.explore.rooms = [...state.explore.rooms, ...payload.rooms];
      }
    },
    increasePage: (state, action) => {
      state.explore.page += 1;
    },
  },
});

export const { setExploreRooms, increasePage } = roomSlice.actions;

export const setRooms = (page) => async (dispatch) => {
  try {
    const {
      data: { results },
    } = await api.rooms(page);
    dispatch(
      setExploreRooms({
        rooms: results,
        page,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export default roomSlice.reducer;
