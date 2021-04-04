import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../navigations/Auth';
import { logout } from '../redux/userSlice';

export const Gate = () => {
  const { isLoggedIn } = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <TouchableOpacity onPress={() => dispatch(logout(null))}>
            <Text>Log out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Auth />
      )}
    </NavigationContainer>
  );
};
