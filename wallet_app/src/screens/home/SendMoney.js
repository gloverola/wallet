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

  const handleSend = () => {
    if (amount >= 100) {
      navigation.navigate('TransferMoney', {amount});
    } else return;
  };

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
            <Text style={styles.send}>Amount to send</Text>
            <TextInput
              style={styles.amount}
              value={amount}
              keyboardType="numeric"
              onChangeText={text => setAmount(text)}
            />
          </View>
          <Text style={styles.naira}>{'\u20A6'}</Text>
        </View>
        <View style={styles.cta}>
          <Button
            text="Continue"
            style={{backgroundColor: COLORS.blue, marginBottom: 10}}
            onPress={handleSend}
          />
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
    backgroundColor: COLORS.blue_50,
  },

  main: {
    flex: 1,
    width: '100%',
    paddingHorizontal: '20@ms',
    paddingVertical: '20@vs',
    backgroundColor: COLORS.blue_50,
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
  box: {
    backgroundColor: COLORS.white,
    padding: '15@ms',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '4@ms',
  },
  send: {
    fontSize: '10@ms',
    fontWeight: '500',
    marginBottom: '10@vs',
  },
  amount: {
    fontSize: '16@ms',
    fontWeight: '600',
  },
  naira: {
    fontSize: '20@ms',
    fontWeight: '600',
  },
  cta: {
    marginTop: '40@vs',
    width: '100%',
  },
});
