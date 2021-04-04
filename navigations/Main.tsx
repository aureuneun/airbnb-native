import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '../screens/Main/Explore';
import Saved from '../screens/Main/Saved';
import GoogleMap from '../screens/Main/GoogleMap';
import Profile from '../screens/Main/Profile';
import colors from '../colors';
import utils from '../utils';
import { Ionicons } from '@expo/vector-icons';

const Main = createBottomTabNavigator();

export default () => {
  return (
    <Main.Navigator
      tabBarOptions={{
        activeTintColor: colors.red,
        labelStyle: {
          textTransform: 'uppercase',
          fontWeight: '600',
        },
        tabStyle: {
          paddingTop: 8,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const isAndroid = utils.isAndroid();
          let iconName = `${isAndroid ? 'md-' : 'ios-'}`;
          if (route.name === 'Explore') {
            iconName += 'search';
          } else if (route.name === 'Saved') {
            iconName += 'heart';
          } else if (route.name === 'Map') {
            iconName += 'map';
          } else if (route.name === 'Profile') {
            iconName += 'person';
          }
          return (
            <Ionicons
              name={iconName}
              size={24}
              color={focused ? colors.red : 'grey'}
            />
          );
        },
      })}
    >
      <Main.Screen name="Explore" component={Explore} />
      <Main.Screen name="Saved" component={Saved} />
      <Main.Screen name="Map" component={GoogleMap} />
      <Main.Screen name="Profile" component={Profile} />
    </Main.Navigator>
  );
};
