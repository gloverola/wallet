import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from '../../components/theme';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {login} from '../../store/actions/authActions';
import {useDispatch, useSelector} from 'react-redux';

const Login = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const {logLoading} = useSelector(state => state.auth);
  const {msg} = useSelector(state => state.err);

  const handleChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };
  const handleSubmit = () => {
    dispatch(login(form));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text>Login</Text>

        <View style={styles.inputView}>
          <Text>Email</Text>
          <Input
            placeholder="Email"
            onChangeText={value => handleChange({name: 'email', value})}
          />
        </View>
        <View style={styles.inputView}>
          <Text>Password</Text>
          <Input
            placeholder="Password"
            secureTextEntry
            onChangeText={value => handleChange({name: 'password', value})}
          />
        </View>
        {logLoading ? (
          <ActivityIndicator size="large" color={COLORS.blue} />
        ) : (
          <Button text="Login" style={{marginTop: 30}} onPress={handleSubmit} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
});
