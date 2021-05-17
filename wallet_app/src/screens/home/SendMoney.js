import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {COLORS} from '../../components/theme';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {login} from '../../store/actions/authActions';
import {useDispatch, useSelector} from 'react-redux';
import back from '../../assets/Icons/left-arrow.png';

const SendMoney = ({navigation}) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('0.00');

  console.log(amount);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Image source={back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTxt}>Bank Transfer</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.amountView}>
            <Text>Amount to send</Text>
            <TextInput
              value={amount}
              keyboardType="numeric"
              onChangeText={text => setAmount(text)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SendMoney;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.white,
  },

  main: {
    flex: 1,
    width: '100%',
    paddingHorizontal: '20@ms',
    paddingVertical: '20@vs',
    backgroundColor: COLORS.white,
  },

  inputView: {
    marginBottom: '20@vs',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40@vs',
  },

  backIcon: {
    width: '25@ms',
    height: '25@ms',
  },

  headerTxt: {
    textAlign: 'center',
    fontSize: '16@ms',
    fontWeight: '600',
  },
});
