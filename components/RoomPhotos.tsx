import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('screen');

const PhotosContainer = styled.View`
  margin-bottom: 10px;
  overflow: hidden;
  width: 100%;
  height: ${(props) => `${height / props.factor}`}px;
  border-radius: 4px;
`;

const SlideImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const RoomPhotos = ({ photos, factor = 4 }) => {
  return (
    <PhotosContainer factor={factor}>
      {photos.length === 0 ? (
        <SlideImage source={require('../assets/roomDefault.jpeg')} />
      ) : (
        <Swiper
          removeClippedSubviews
          activeDotColor={'white'}
          dotColor={'rgba(200, 200, 200, 0.8)'}
          paginationStyle={{ marginBottom: -20 }}
        >
          {photos.map((photo) => (
            <SlideImage key={photo.id} source={{ uri: photo.file }} />
          ))}
        </Swiper>
      )}
    </PhotosContainer>
  );
};

RoomPhotos.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string,
    })
  ),
};

export default RoomPhotos;
