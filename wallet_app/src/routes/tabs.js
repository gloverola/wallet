import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../components/theme';
import {Image} from 'react-native';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import {
  HOME_SCREEN,
  NOTIFICATION_SCREEN,
  PROFILE_SCREEN,
  SEARCH_SCREEN,
} from '../constants/routeNames';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: true,
  style: {
    backgroundColor: COLORS.white,
    height: '10%',
    borderTopWidth: 1,
    borderTopColor: COLORS.grey_200,
    paddingVertical: '1%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontSize: 12,
    marginBottom: '2%',
    padding: 0,
  },
  activeTintColor: COLORS.primary,
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.primary : COLORS.grey_300;

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={require('../assets/home-icon.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                    marginBottom: 0,
                  }}
                />
              );

            case 'Search':
              return (
                <Image
                  source={require('../assets/search-icon.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case 'Notification':
              return (
                <Image
                  source={require('../assets/bell-icon.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case 'Profile':
              return (
                <Image
                  source={require('../assets/profile-grey-icon.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
          }
        },
      })}>
      <Tab.Screen name={HOME_SCREEN} component={Home} />
      <Tab.Screen name={SEARCH_SCREEN} component={Search} />
      <Tab.Screen name={NOTIFICATION_SCREEN} component={Notifications} />
      <Tab.Screen name={PROFILE_SCREEN} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTab;
