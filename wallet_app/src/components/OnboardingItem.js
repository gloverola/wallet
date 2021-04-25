import React from 'react';
import {StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';

const OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />

      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 0.7,
    justifyContent: 'center',
  },

  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    textAlign: 'center',
    color: '#6C63FF',
  },

  desc: {
    fontWeight: '300',
    fontSize: 14,
    textAlign: 'center',
    color: '#62656b',
    paddingHorizontal: 64,
  },
});
