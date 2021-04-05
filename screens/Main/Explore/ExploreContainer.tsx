import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRooms } from '../../../redux/roomSlice';
import ExplorePresenter from './ExplorePresenter';

export default () => {
  const {
    explore: { rooms },
  } = useSelector((state: any) => state.roomReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRooms());
  }, []);
  return <ExplorePresenter rooms={rooms} />;
};
