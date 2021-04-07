import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import RoomCard from '../../../components/RoomCard';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

const FakeBar = styled.View`
  height: 40px;
  width: 100%;
  background-color: white;
  box-shadow: 1px 5px 5px rgba(200, 200, 200, 0.5);
  margin: 60px 0px 15px 0px;
  border-radius: 7px;
  justify-content: center;
  padding-left: 15px;
`;

const FakeText = styled.Text`
  font-size: 14px;
  font-weight: 300;
`;

const LoadMore = styled.View`
  width: 100%;
  padding: 10px 10px;
  align-items: center;
  background-color: #006a70;
  border-radius: 5px;
  margin-bottom: 30px;
`;

const LoadMoreText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

export default ({ rooms, increasePage }) => {
  const navigation = useNavigation();
  return (
    <Container>
      {rooms.length === 0 ? (
        <ActivityIndicator color="black" />
      ) : (
        <>
          <FakeBar>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Search')}
            >
              <FakeText>Search...</FakeText>
            </TouchableWithoutFeedback>
          </FakeBar>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 30 }}
          >
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                id={room.id}
                price={room.price}
                isFav={room.is_fav}
                isSuperHost={room.user.superhost}
                name={room.name}
                photos={room.photos}
                roomObj={room}
              />
            ))}
            <TouchableOpacity onPress={increasePage}>
              <LoadMore>
                <LoadMoreText>Load More</LoadMoreText>
              </LoadMore>
            </TouchableOpacity>
          </ScrollView>
        </>
      )}
    </Container>
  );
};
