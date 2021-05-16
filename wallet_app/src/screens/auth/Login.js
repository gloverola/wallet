import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../components/theme';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {login} from '../../store/actions/authActions';
import {useDispatch, useSelector} from 'react-redux';
import back from '../../assets/Icons/left-arrow.png';

const Login = ({navigation}) => {
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
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Image source={back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTxt}>Login</Text>
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
          <Text>Password</Text>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
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
