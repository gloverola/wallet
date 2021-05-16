import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {COLORS} from '../../components/theme';

const More = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.headerTxt}>New Card</Text>
      </View>
    </SafeAreaView>
  );
};

export default More;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue_50,
  },
  main: {
    flex: 1,
    paddingHorizontal: '20@ms',
    paddingTop: '20@ms',
  },
  headerTxt: {
    textAlign: 'right',
    fontSize: '16@ms',
    fontWeight: '600',
  },
});
