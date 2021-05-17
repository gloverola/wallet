import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/home/Dashboard';
import BottomTab from './tabs';
import SendMoney from '../screens/home/SendMoney';
import TransferMoney from '../screens/home/TransferMoney';

const Stack = createStackNavigator();

const HomeRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Dashboard" component={BottomTab} />
      <Stack.Screen name="SendMoney" component={SendMoney} />
      <Stack.Screen name="TransferMoney" component={TransferMoney} />
    </Stack.Navigator>
  );
};

export default HomeRoute;
