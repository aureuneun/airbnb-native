import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/userSlice';

export const Gate = () => {
  const { isLoggedIn } = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isLoggedIn ? (
        <TouchableOpacity onPress={() => dispatch(logout(null))}>
          <Text>Log out</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => dispatch(login('aksdjflkjsl'))}>
          <Text>Log in</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
