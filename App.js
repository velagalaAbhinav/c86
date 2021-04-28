import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Touchableopacity,TextInput,Alert,Mordal,KeyboardAvoidingView} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation'
import {CreateDrawerNavigator} from 'react-navigation-drawer'

import SignUpLoginScreen from './screens/SignUpLoginScreen'
import HomeScreen from './screens/homeScreen'
import ExchangeScreen from './screens/exchangeScreen'
import SettingScreen from './screens/settingsScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpLoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
