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
    title: 'Accurate CGPA calculator',
    description: 'Keep tab on your school progress by calculating your CGPA',
    image: require('../assets/images/calc.png'),
  },

  {
    id: '2',
    title: 'Quick and easy to use',
    description: "It's quick, flexible and easy to use",
    image: require('../assets/images/progress.png'),
  },

  {
    id: '3',
    title: 'Secured and Personal',
    description:
      'With a one time login pin, have controll over who can access your points',
    image: require('../assets/images/secure.png'),
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
