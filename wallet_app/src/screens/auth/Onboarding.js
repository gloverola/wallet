import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Animated,
  TouchableOpacity,
  Text,
} from 'react-native';
import OnboardingItem from '../../components/OnboardingItem';
import Paginator from '../../components/Paginator';

// slide items
const slides = [
  {
    id: '1',
    title: 'Your Financial Manager',
    description:
      'Managing your funds should be the easiest task on your to-do list, so we created wallets just for you',
    image: require('../../assets/images/pie.png'),
  },

  {
    id: '2',
    title: 'Borderless Transactios',
    description: 'Send money to any part of the world',
    image: require('../../assets/images/card.png'),
  },

  {
    id: '3',
    title: 'Total Control Over Your Money',
    description: 'Always know what is going on with your money',
    image: require('../../assets/images/control.png'),
  },

  {
    id: '4',
    title: 'Account Protection',
    description: 'Your money is always safe with us',
    image: require('../../assets/images/protect.png'),
  },
];

const Onboarding = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={slides}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
      <View style={styles.cta}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.ctaTxt}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  cta: {
    marginBottom: 80,
    backgroundColor: '#6C63FF',
    width: '90%',
    borderRadius: 5,
  },
  ctaTxt: {
    padding: 15,
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
});
