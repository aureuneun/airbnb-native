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
      const { explore } = state;
      const { payload } = action;
      payload.rooms.forEach((payloadRoom) => {
        const exists = explore.rooms.find(
          (savedRoom) => savedRoom.id === payloadRoom.id
        );
        if (!exists) {
          explore.rooms.push(payloadRoom);
        }
      });
      state.explore.page = payload.page;
    },
  },
});

const { setExploreRooms } = roomSlice.actions;

export const setRooms = () => async (dispatch) => {
  try {
    const {
      data: { results },
    } = await api.rooms();
    dispatch(
      setExploreRooms({
        rooms: results,
        page: 1,
      })
    );
  } catch (error) {}
};

export default roomSlice.reducer;
