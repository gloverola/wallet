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
import {send} from '../../store/actions/transactionAction';

const TransferMoney = ({navigation, route}) => {
  const {amount} = route.params;
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const [account, setAccount] = useState('');

  const handleSend = () => {
    const data = {
      amount: +amount,
      description,
      account: +account,
    };

    dispatch(send(data));
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
          <Text style={styles.headerTxt}>Send Money</Text>
        </View>
        <Text style={styles.detials}>Recipient's details</Text>
        <TextInput
          style={styles.input}
          value={account}
          keyboardType="numeric"
          placeholder="Account Number"
          onChangeText={text => setAccount(text)}
        />
        <TextInput
          style={styles.input}
          value={description}
          placeholder="Description"
          onChangeText={text => setDescription(text)}
        />
        <View style={styles.cta}>
          <Button
            text="Send Money"
            style={{backgroundColor: COLORS.blue, marginBottom: 10}}
            onPress={handleSend}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransferMoney;

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
  cta: {
    marginTop: '40@vs',
    width: '100%',
  },
  detials: {
    fontSize: '18@ms',
    fontWeight: '500',
    marginBottom: '30@vs',
  },
  input: {
    paddingTop: '5@ms',
    borderBottomWidth: 1,
    marginBottom: '30@vs',
    borderBottomColor: COLORS.grey,
  },
});
