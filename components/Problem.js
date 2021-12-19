import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import colors from '../assets/colors';
import Button from './Button';

function Problem({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>
          The Theorem of Areas of Similar Triangles
        </Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/images/similarity_theorem.jpeg')}
        />
      </View>
      <Button navigation={navigation} page="Example" text="Start Solving" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: colors.backgroundColor,
    height: '100%',
  },
  headerWrapper: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    padding: 15,
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 350,
  },
});

export default Problem;
