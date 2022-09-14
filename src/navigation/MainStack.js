/* eslint-disable no-useless-constructor */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import LoginSuccess from '../screens/LoginSuccess';
import CounterScreen from '../screens/CounterScreen';
import Home from '../screens/Home';

const MainStack = createNativeStackNavigator();

class MainStackNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainStack.Navigator
        initialRouteName={'Home'}
        headerMode="none"
        screenOptions={{
          headerShown: false,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'red' },
        }}>
        <MainStack.Screen name={'Splash'} component={Splash} />
        <MainStack.Screen name={'Login'} component={Login} />
        <MainStack.Screen name={'LoginSuccess'} component={LoginSuccess} />
        <MainStack.Screen name={'CounterScreen'} component={CounterScreen} />
        <MainStack.Screen name={'Home'} component={Home} />
      </MainStack.Navigator>
    );
  }
}

export default MainStackNavigator;
