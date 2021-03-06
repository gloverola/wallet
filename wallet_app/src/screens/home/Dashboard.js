import React, {useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '../../components/theme';
import {socket, roomID, receiver} from '../../store/actions/transactionAction';
import {useDispatch} from 'react-redux';

const Dashboard = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    socket.emit('joinService', {roomID});
    dispatch(receiver());
  }, []);
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
            <Text style={styles.balance}>N 1400.00</Text>
            <View style={styles.currency}>
              <Text style={styles.currTxt}>NGN</Text>
            </View>
          </View>
          <View style={styles.addMoneyBtn}>
            <TouchableOpacity>
              <Text style={styles.addMoneyTxt}>Add money</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* layer two */}
          <View style={styles.layer2}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.box}>
                <View style={styles.circle1}>
                  <Image
                    source={require('../../assets/Icons/request-money.png')}
                    style={styles.boxIcon}
                  />
                </View>
                <Text style={styles.boxTxt}>Request Money</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.box}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('SendMoney')}>
                <View style={styles.circle1}>
                  <Image
                    source={require('../../assets/Icons/money-bag.png')}
                    style={styles.boxIcon}
                  />
                </View>
                <Text style={styles.boxTxt}>Send Money</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.box}>
                <View style={styles.circle1}>
                  <Image
                    source={require('../../assets/Icons/telephone.png')}
                    style={styles.boxIcon}
                  />
                </View>
                <Text style={styles.boxTxt}>Buy Airtime</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <View style={styles.circle1}>
                  <Image
                    source={require('../../assets/Icons/invoice.png')}
                    style={styles.boxIcon}
                  />
                </View>
                <Text style={styles.boxTxt}>Pay Bills</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}></View>
          </View>

          {/* Layer 3 */}
          <TouchableOpacity style={styles.layer3}>
            <Image
              source={require('../../assets/Icons/plus.png')}
              style={styles.plusIcon}
            />
            <Text style={styles.dollarTxt}>
              Tap here to create your dollar card now.
            </Text>
          </TouchableOpacity>

          {/* Layer four */}
          <View style={styles.layer4}>
            <Text style={styles.giftTxt}>
              Send a reedemable gift card to family & friends anywhere in the
              world.
            </Text>
          </View>
        </ScrollView>
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
    paddingHorizontal: '20@ms',
    paddingTop: '20@ms',
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
  addMoneyView: {
    width: '100%',
    padding: '20@ms',
    backgroundColor: COLORS.white,
    marginTop: '20@vs',
    borderRadius: '8@ms',
  },
  layer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20@ms',
  },
  currency: {
    backgroundColor: COLORS.blue_100,
    paddingVertical: '8@ms',
    paddingHorizontal: '15@ms',
    borderRadius: 4,
  },
  currTxt: {
    color: COLORS.blue,
    fontSize: '12@ms',
  },
  addMoneyBtn: {
    backgroundColor: COLORS.blue_100,
    paddingVertical: '8@ms',
    paddingHorizontal: '15@ms',
    borderRadius: 4,
    width: '40%',
  },
  addMoneyTxt: {
    color: COLORS.blue,
    fontSize: '12@ms',
    textAlign: 'center',
  },
  balance: {
    fontSize: '18@ms',
    color: COLORS.black,
    fontWeight: '700',
  },
  layer2: {
    width: '100%',
    marginTop: '20@ms',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12@ms',
  },
  box: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: '8@ms',
    padding: '10@ms',
  },
  circle1: {
    width: '40@ms',
    height: '40@ms',
    borderRadius: '1000@ms',
    backgroundColor: COLORS.blue_100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxIcon: {
    width: '25@ms',
    height: '25@ms',
  },
  boxTxt: {
    fontSize: 12,
    marginTop: '15@ms',
    color: COLORS.black,
  },
  layer3: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.yellow,
    padding: '20@ms',
  },
  plusIcon: {
    width: '25@ms',
    height: '25@ms',
  },
  dollarTxt: {
    color: COLORS.black,
  },
  layer4: {
    width: '100%',
    paddingHorizontal: '20@ms',
    paddingVertical: '40@vs',
    backgroundColor: COLORS.blue,
    marginVertical: '20@ms',
    borderRadius: '8@ms',
  },
  giftTxt: {
    color: COLORS.white,
    fontSize: '18@ms',
    fontWeight: '600',
  },
});
