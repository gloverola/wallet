import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {COLORS} from './theme';
import {ScaledSheet} from 'react-native-size-matters';

const Button = ({...props}) => {
  return (
    <TouchableOpacity {...props} style={[styles.btn, props.style]}>
      <Text style={styles.btnTxt}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = ScaledSheet.create({
  btn: {
    width: '100%',
    backgroundColor: COLORS.blue,
    padding: '20@ms0.3',

    borderRadius: 10,
  },

  btnTxt: {
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '18@ms',
  },
});
