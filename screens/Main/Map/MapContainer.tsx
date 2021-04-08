import React, { useEffect, useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import api from '../../../api';
import MapPresenter from './MapPresenter';

const { width, height } = Dimensions.get('screen');

export default ({ rooms, token, searchRooms }) => {
  const mapRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const onScroll = (e) => {
    const {
      nativeEvent: {
        contentOffset: { x },
      },
    } = e;
    const position = Math.abs(Math.round(x / width));
    setCurrentIndex(position);
  };
  const moveMap = () => {
    mapRef.current?.animateCamera(
      {
        center: {
          latitude:
            rooms.length === 0
              ? 37.400928
              : parseFloat(rooms[currentIndex].lat),
          longitude:
            rooms.length === 0
              ? 126.734682
              : parseFloat(rooms[currentIndex].lng),
        },
      },
      { duration: 3000 }
    );
  };
  useEffect(() => {
    moveMap();
  }, [currentIndex]);
  const onRegionChangeComplete = async () => {
    try {
      const { northEast, southWest } = await mapRef.current?.getMapBoundaries();
      const form = {
        nelat: northEast.latitude,
        nelng: northEast.longitude,
        swlat: southWest.latitude,
        swlng: southWest.longitude,
      };
      const {
        data: { results },
      } = await api.search(form, token);
      searchRooms(results);
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <MapPresenter
      rooms={rooms}
      mapRef={mapRef}
      onScroll={onScroll}
      currentIndex={currentIndex}
      onRegionChangeComplete={onRegionChangeComplete}
    />
  );
};
