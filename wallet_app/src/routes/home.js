import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/home/Dashboard';

const Stack = createStackNavigator();

const HomeRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default HomeRoute;
