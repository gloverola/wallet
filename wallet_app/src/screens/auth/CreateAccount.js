import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {Image, TouchableOpacity, Text, View, SafeAreaView} from 'react-native';
import {COLORS} from '../../components/theme';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {register} from '../../store/actions/authActions';
import {useDispatch} from 'react-redux';
import back from '../../assets/Icons/left-arrow.png';

const CreateAccount = ({navigation}) => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const handleChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };
  const handleSubmit = () => {
    dispatch(register(form));
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
          <Text style={styles.headerTxt}>Create Account</Text>
        </View>
        <View style={styles.inputView}>
          <Text>Name</Text>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Name"
            onChangeText={value => handleChange({name: 'name', value})}
          />
        </View>
        <View style={styles.inputView}>
          <Text>Email</Text>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            onChangeText={value => handleChange({name: 'email', value})}
          />
        </View>
        <View style={styles.inputView}>
          <Text>Phone</Text>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            placeholder="Phone"
            onChangeText={value => handleChange({name: 'phone', value})}
          />
        </View>
        <View style={styles.inputView}>
          <Text>Password</Text>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            onChangeText={value => handleChange({name: 'password', value})}
          />
        </View>
        <Button
          text="Create Account"
          style={{marginTop: 30}}
          onPress={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;

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
