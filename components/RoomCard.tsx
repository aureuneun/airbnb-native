import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('screen');

const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
  align-items: flex-start;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 7px;
`;

const Superhost = styled.View`
  padding: 3px 5px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 5px;
`;

const SuperhostText = styled.Text`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 10px;
`;

const PriceContainer = styled.View`
  flex-direction: row;
`;

const PriceText = styled.Text`
  font-size: 16px;
`;

const PriceNumber = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const PhotosContainer = styled.View`
  margin-bottom: 10px;
  overflow: hidden;
  width: 100%;
  height: ${height / 4}px;
  border-radius: 4px;
`;

const SlideImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const RoomCard = ({ id, price, isFav, isSuperHost, name, photos }) => {
  return (
    <Container>
      <PhotosContainer>
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
      {isSuperHost ? (
        <Superhost>
          <SuperhostText>Superhost</SuperhostText>
        </Superhost>
      ) : null}
      <Name>{name}</Name>
      <PriceContainer>
        <PriceNumber>${price}</PriceNumber>
        <PriceText> / night</PriceText>
      </PriceContainer>
    </Container>
  );
};

RoomCard.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  isFav: PropTypes.bool.isRequired,
  isSuperHost: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string,
    })
  ),
};

export default RoomCard;
