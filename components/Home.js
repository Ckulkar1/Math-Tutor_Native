import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import colors from '../assets/colors/';
import Button from './Button';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>Learning Math step by step</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/images/Herobackground.jpg')}
        />
      </View>
      <Button navigation={navigation} page="Problem" text="Get Started" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    height: '100%',
  },
  headerWrapper: {
    paddingVertical: 15,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  imageWrapper: {
    display: 'flex',
  },
  image: {
    height: imageHeight,
    width: imageWidth,
  },
});

export default Home;
