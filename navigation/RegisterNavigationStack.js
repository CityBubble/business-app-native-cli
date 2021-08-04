import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import RegisterAddress from '../screens/RegisterVendorScreens/RegisterAddressScreen';
import Otp from '../screens/RegisterVendorScreens/OtpScreen'
import Login from '../screens/MobileLoginScreen'
import Location from '../screens/LocationScreen'
import Register from '../screens/RegisterScreen'
import Proofs from '../screens/RegisterVendorScreens/ProofsScreen'
import waitingScreen from '../screens/RegisterVendorScreens/WaitingScreen';
import UnderReviewScreen from '../screens/RegisterVendorScreens/UnderProcessScreen';

import GlobalStyles from '../components/GlobalStyles'


const Stack = createStackNavigator()

const  RegisterNavigationStack = () =>{
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <StatusBar style="light" />
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="RegisterScreen" component={Register} />
            <Stack.Screen name="AddressScreen" component={RegisterAddress} />
            <Stack.Screen name="ProofScreen" component={Proofs} />
            <Stack.Screen name="waitingScreen" component={waitingScreen} />
            <Stack.Screen name="reviewScreen" component={UnderReviewScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaView>
    );
}


export default RegisterNavigationStack;