import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/home/Dashboard';
import BottomTab from './tabs';

const Stack = createStackNavigator();

const HomeRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Home" component={Dashboard} /> */}
      <Stack.Screen name="Dashboard" component={BottomTab} />
    </Stack.Navigator>
  );
};

export default HomeRoute;
