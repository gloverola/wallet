import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import {COLORS} from '../../components/theme';
import next from '../../assets/Icons/next.png';
import invite from '../../assets/Icons/invitation.png';
import qrCode from '../../assets/Icons/qr-code.png';
import whatsapp from '../../assets/Icons/whatsapp.png';
import telephone from '../../assets/Icons/telephone.png';

const More = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.headerTxt}>More things you can do</Text>
        <View style={styles.recieve}>
          <Text style={styles.recieveTxt}>Recieve Money</Text>
          <View style={styles.box}>
            <Text style={styles.account}>
              Wallet Account Number:{' '}
              <Text style={styles.accountNum}>847489938472</Text>
            </Text>
            <Text style={styles.account}>
              Bank Name: <Text style={styles.accountNum}>Wallet Bank PLC</Text>
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.circle}>
              <Image source={invite} style={styles.icon} />
            </View>
            <View style={styles.column}>
              <Text style={styles.head}>Invite Friends</Text>
              <Text style={styles.subHead}>
                Get paid for every friend that signd up and uses Wallet
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.circle}>
              <Image source={qrCode} style={styles.icon} />
            </View>
            <View style={styles.column}>
              <Text style={styles.head}>Pay with QR code</Text>
              <Text style={styles.subHead}>Make payment with Visa QR</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.circle}>
              <Image source={whatsapp} style={styles.icon} />
            </View>
            <View style={styles.column}>
              <Text style={styles.head}>Send money to WhatsApp</Text>
              <Text style={styles.subHead}>
                Send money to your friends on WhatsApp
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.circle}>
              <Image source={telephone} style={styles.icon} />
            </View>
            <View style={styles.column}>
              <Text style={styles.head}>Contact support</Text>
            </View>
          </View>
        </View>
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
    fontSize: '18@ms',
    fontWeight: '600',
    marginBottom: '20@vs',
  },
  recieve: {
    marginBottom: '20@vs',
  },
  recieveTxt: {
    fontSize: '16@ms',
    fontWeight: '500',
    marginBottom: '10@vs',
  },
  box: {
    backgroundColor: COLORS.blue,
    padding: '15@ms',
    borderRadius: '6@ms',
  },
  account: {
    color: COLORS.grey,
  },
  accountNum: {
    fontWeight: '600',
    color: COLORS.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20@ms',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.blue_100,
    paddingVertical: '10@vs',
  },
  circle: {
    width: '40@ms',
    height: '40@ms',
    borderRadius: 500,
    backgroundColor: COLORS.blue_100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10@ms',
  },
  icon: {
    width: '20@ms',
    height: '20@ms',
  },
  next: {
    width: '20@ms',
    height: '20@ms',
  },
  head: {
    fontSize: '10@ms',
    fontWeight: '500',
  },
  subHead: {
    fontSize: '9@ms',
    fontWeight: '300',
  },
  column: {
    justifyContent: 'flex-start',
  },
});
