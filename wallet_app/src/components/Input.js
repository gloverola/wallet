import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from './theme';

const Input = ({...props}) => {
  return <TextInput {...props} style={[styles.input, props.style]} />;
};

export default Input;

const styles = ScaledSheet.create({
  input: {
    width: '100%',
    backgroundColor: COLORS.blue_50,
    padding: '15@ms',
    borderRadius: '8@ms',
  },
});
