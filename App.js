/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { StyleSheet,SafeAreaView } from 'react-native';
 import Navigation from './navigation/Navigation';
 import GlobalStyles from './components/GlobalStyles'
 
 
 
 export default function App() {
   return (
     <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <Navigation/>
     </SafeAreaView>
   );
 }