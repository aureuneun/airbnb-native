import React from 'react';
import styled from 'styled-components/native';
import RoomCard from '../../../components/RoomCard';

const Container = styled.View`
  margin-top: 70px;
  padding: 0 15px;
`;

const SV = styled.ScrollView``;

const Title = styled.Text`
  font-size: 36px;
  margin-bottom: 10px;
`;

const NoFavs = styled.Text``;

export default ({ rooms }) => {
  return (
    <Container>
      <Title>Favourites ({rooms.length})</Title>
      <SV
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        {rooms.length !== 0 ? (
          rooms.map((room) => (
            <RoomCard
              key={room.id}
              id={room.id}
              price={room.price}
              isFav={room.is_fav}
              isSuperHost={room.user.superhost}
              name={room.name}
              photos={room.photos}
            />
          ))
        ) : (
          <NoFavs>You don't have any favs.</NoFavs>
        )}
      </SV>
    </Container>
  );
};
