import 'react-native-gesture-handler'
import React from 'react'
import { View, StatusBar } from 'react-native'

import firebase from './src/services/firebaseConnection';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth';

export default function App(){
  return (
    <NavigationContainer>
      <AuthProvider>
      <StatusBar backgroundColor="#131313" barStyle="ligth-content"/>
      <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}
