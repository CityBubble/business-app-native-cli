import React from 'react';
import { StyleSheet,SafeAreaView , StatusBar} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import RegisterAddress from '../screens/RegisterAddressScreen';
import Otp from '../screens/OtpScreen'
import Login from '../screens/MobileLoginScreen'
import Location from '../screens/LocationScreen'

import GlobalStyles from '../components/GlobalStyles'


const Stack = createStackNavigator()

export default function Navigation() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <StatusBar style="light" /> 
        <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Otp" component={Otp} />    
            <Stack.Screen name="Register" component={RegisterAddress} />
        </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
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