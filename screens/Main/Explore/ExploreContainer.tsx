import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increasePage, setRooms } from '../../../redux/roomSlice';
import ExplorePresenter from './ExplorePresenter';

export default () => {
  const {
    explore: { rooms, page },
  } = useSelector((state: any) => state.roomReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRooms(1));
  }, []);
  useEffect(() => {
    dispatch(setRooms(page));
  }, [page]);
  return (
    <ExplorePresenter
      rooms={rooms}
      increasePage={() => dispatch(increasePage(null))}
    />
  );
};
