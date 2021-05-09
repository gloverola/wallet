import React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '../../components/theme';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.notifView}>
          <Image
            source={require('../../assets/Icons/settings.png')}
            style={styles.notifImage}
          />
          <View style={styles.notifLine} />
          <Image
            source={require('../../assets/Icons/bell.png')}
            style={styles.notifImage}
          />
        </View>

        {/* Add Money View */}
        <View style={styles.addMoneyView}>
          <View style={styles.layer1}>
            <Text>N 1400.00</Text>
            <View style={styles.currency}>
              <Text style={styles.currTxt}>NGN</Text>
            </View>
          </View>
          <View style={styles.addMoneyBtn}>
            <TouchableOpacity>
              <Text style={styles.addMoneyTxt}>Add Money</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue_50,
  },
  main: {
    flex: 1,
    padding: '20@ms',
  },
  notifView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  notifImage: {
    width: '25@ms',
    height: '25@vs',
    resizeMode: 'contain',
  },
  notifLine: {
    backgroundColor: COLORS.grey,
    width: 2,
    height: '25@vs',
    marginHorizontal: '20@ms',
  },
});
