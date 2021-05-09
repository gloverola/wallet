import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../components/theme';
import {Image} from 'react-native';
import Dashboard from '../screens/home/Dashboard';
import Cards from '../screens/home/Cards';
import Transactions from '../screens/home/Transactions';
import More from '../screens/home/More';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: true,
  style: {
    backgroundColor: COLORS.white,
    height: '10%',
    borderTopWidth: 0,
    paddingVertical: '1%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontSize: 12,
    marginBottom: '2%',
    padding: 0,
  },
  activeTintColor: COLORS.blue,
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.blue : '#c6c6c6';

          switch (route.name) {
            case 'Dashboard':
              return (
                <Image
                  source={require('../assets/Icons/home.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                    marginBottom: 0,
                  }}
                />
              );

            case 'Cards':
              return (
                <Image
                  source={require('../assets/Icons/credit-card.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case 'Transactions':
              return (
                <Image
                  source={require('../assets/Icons/transaction.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case 'More':
              return (
                <Image
                  source={require('../assets/Icons/right-menu-bars.png')}
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
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Cards" component={Cards} />
      <Tab.Screen name="Transactions" component={Transactions} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

export default BottomTab;
