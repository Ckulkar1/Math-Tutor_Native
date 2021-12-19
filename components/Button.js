import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../assets/colors';

function Button({navigation, page, text}) {
  return (
    <View style={styles.action}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(page);
        }}
        style={styles.btn}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  action: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  btn: {
    backgroundColor: colors.btnBackgroundColor,
    padding: 15,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Button;
