import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {COLORS} from '../../components/theme';
import Input from '../../components/Input';
import Button from '../../components/Button';

const CreateAccount = () => {
  const [form, setForm] = useState({});

  const handleChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const handleSubmit = () => {
    console.log('form_@register>>>', form);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text>Create Account</Text>
        <View style={styles.inputView}>
          <Text>Name</Text>
          <Input
            placeholder="Name"
            onChangeText={value => handleChange({name: 'name', value})}
          />
        </View>
        <View style={styles.inputView}>
          <Text>Email</Text>
          <Input
            placeholder="Email"
            onChangeText={value => handleChange({name: 'email', value})}
          />
        </View>
        <View style={styles.inputView}>
          <Text>Phone</Text>
          <Input
            placeholder="Phone"
            onChangeText={value => handleChange({name: 'phone', value})}
          />
        </View>
        <View style={styles.inputView}>
          <Text>Password</Text>
          <Input
            placeholder="Password"
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
});
