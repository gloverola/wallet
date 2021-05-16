import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {COLORS} from '../../components/theme';

const Cards = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.headerTxt}>New Card</Text>
        <View style={styles.card}>
          <View style={styles.top}>
            <View style={styles.limited}>
              <Text style={styles.limitedTxt}>Limited use card</Text>
            </View>
            <Text style={styles.cardBalance}>N1400.00</Text>
          </View>
          <View style={styles.middle}>
            <Text style={styles.name}>GLOVER OLAOLUWA</Text>
            <Text style={styles.number}>8857 8585 8586 6647</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.exp}>07/24</Text>
            <Text style={styles.visa}>VISA</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cards;

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
    textAlign: 'right',
    fontSize: '16@ms',
    fontWeight: '600',
  },
  card: {
    width: '100%',
    height: '25%',
    backgroundColor: COLORS.blue,
    marginTop: '40@vs',
    borderRadius: '10@ms',
    position: 'relative',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20@vs',
  },
  cardBalance: {
    fontSize: '14@ms',
    marginRight: '20@ms',
    fontWeight: '600',
    color: COLORS.white,
  },
  limited: {
    width: '30%',

    backgroundColor: COLORS.white,
    borderTopRightRadius: '50@ms',
    borderBottomRightRadius: '50@ms',
  },
  limitedTxt: {
    fontSize: '10@ms',
    padding: '5@ms',
    textAlign: 'center',
  },
  middle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: '20@ms',
    marginLeft: '40@ms',
  },
  name: {
    textAlign: 'left',
    fontSize: '10@ms',
    color: COLORS.blue_100,
  },
  number: {
    fontSize: '20@ms',
    width: '100%',
    color: COLORS.white,
    fontWeight: '600',
  },
  bottom: {
    flexDirection: 'row',
    marginTop: '30@ms',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '20@ms',
  },
  exp: {
    fontSize: '14@ms',
    color: COLORS.white,
  },
  visa: {
    fontSize: '18@ms',
    color: COLORS.white,
    fontWeight: '900',
  },
});
