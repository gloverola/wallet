import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '../../components/theme';

const transactions = [
  {
    type: 'send',
    name: 'Ayo',
    amount: '1500',
    from: 'GTBank Plc',
    description: 'KIP:GTB/GLOVER OLAOLUWA/Via GTWORLD',
    tranxRef: '094893jf8jd8499304jdj2903',
    date: 'Mar 1 2021',
  },
  {
    type: 'recieve',
    name: 'Mildred',
    amount: '2000',
    from: 'Wema Bank Plc',
    description: 'KIP:Wema/GLOVER OLAOLUWA/Via AlertByWema',
    tranxRef: '094893948375894h4jdj2903',
    date: 'Mar 2 2021',
  },
  {
    type: 'recieve',
    name: 'Joy',
    amount: '2500',
    from: 'GTBank Plc',
    description: 'KIP:GTB/GLOVER OLAOLUWA/Via GTWORLD',
    tranxRef: '3948jkhdjf794982903',
    date: 'Mar 3 2021',
  },
  {
    type: 'send',
    name: 'Ayo',
    amount: '2500',
    from: 'GTBank Plc',
    description: 'KIP:GTB/GLOVER OLAOLUWA/Via GTWORLD',
    tranxRef: '479dsbhjds499304jdj2903',
    date: 'Mar 4 2021',
  },
  {
    type: 'recieve',
    name: 'Hafeez',
    amount: '5000',
    from: 'UBA Plc',
    description: 'KIP:UBA/GLOVER OLAOLUWA/Via UBA',
    tranxRef: '95w738893jf8jd8499304jdj2903',
    date: 'Mar 4 2021',
  },
  {
    type: 'send',
    name: 'Cynthia',
    amount: '1500',
    from: 'GTBank Plc',
    description: 'KIP:GTB/GLOVER OLAOLUWA/Via GTWORLD',
    tranxRef: '94794893jf8jd8499304jdj2903',
    date: 'Mar 5 2021',
  },
];

const Transactions = () => {
  const renderList = ({item}) => {
    return (
      <TouchableOpacity style={styles.list}>
        <View style={styles.col1}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <Text style={item.type === 'send' ? styles.send : styles.recieve}>
          {item.type === 'send' ? `- ${item.amount}` : `+ ${item.amount}`}
        </Text>
      </TouchableOpacity>
    );
  };

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

        <FlatList
          data={transactions}
          renderItem={renderList}
          numColumns={1}
          keyExtractor={item => `${item.tranxRef}`}
        />
      </View>
    </SafeAreaView>
  );
};

export default Transactions;

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
    marginVertical: '20@vs',
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
  list: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10@vs',
    borderRadius: '4@ms',
    padding: '10@ms',
  },
  name: {
    fontSize: '18@ms',
    fontWeight: '500',
  },
  date: {
    fontSize: '10@ms',
    color: COLORS.grey,
  },
  send: {
    color: COLORS.red,
    fontSize: '16@ms',
    fontWeight: '600',
  },
  recieve: {
    color: COLORS.green,
    fontSize: '16@ms',
    fontWeight: '600',
  },
});
