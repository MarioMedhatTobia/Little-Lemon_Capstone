import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../imgs/LittleLemonLogo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
     height: 80,
     width: 300,
     resizeMode: 'contain',
  },
  container: {
    
    padding: 20,
    marginTop: 0,
    backgroundColor: 'aliceblue',
  },

  title: {
    marginTop: 16,
    paddingVertical: 0,
    color: 'grey',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header