import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavContainer from './src/routes';

export default function App() {
  return <AppNavContainer />;
}
