import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '../../components/theme';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text>Dashboard</Text>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    flex: 1,
    padding: '20@ms',
  },
});
