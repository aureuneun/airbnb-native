import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Auth from '../navigations/Auth';
import Main from '../navigations/Main';

export const Gate = () => {
  const { isLoggedIn } = useSelector((state: any) => state.userReducer);
  return (
    <NavigationContainer>
      {isLoggedIn ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};
