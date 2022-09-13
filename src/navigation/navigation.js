import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './MainStack';
const MainNavigation = props => {
  return (
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
  )
};

export default MainNavigation;
