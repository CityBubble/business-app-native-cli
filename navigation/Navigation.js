import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import RegisterAddress from '../screens/RegisterAddressScreen';
import Otp from '../screens/OtpScreen'
import Login from '../screens/MobileLoginScreen'
import Location from '../screens/LocationScreen'
import Register from '../screens/RegisterScreen'
import Proofs from '../screens/ProofsScreen'
import UnderReviewScreen from '../screens/waitingScreen/underReviewScreen';
import underWaitingScreen from '../screens/waitingScreen/underWaitingScreen';
import waitingScreen from '../screens/waitingScreen';
import GlobalStyles from '../components/GlobalStyles'
import Tabnavigator from './tabNavigation';
import Profile from '../screens/ProfileScreen';
import AddressScreen from '../screens/forms/AddressScreen';
import BasicInfoScreen from '../screens/forms/BasicInfoScreen';
import ContactScreen from '../screens/forms/ContactScreen';
import SocialScreen from '../screens/forms/SocialScreen';
import ElitePlans from '../screens/elitePlanScreen';
import BasicPlans from '../screens/basicPlanScreen';
import PlanScreen from '../screens/PlansScreen';
import unSubscribedScreen from '../styles/unsubscribedScreen';


const Stack = createStackNavigator()

export default function Navigation() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <StatusBar style="light" />
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TabNavigation" >
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="RegisterScreen" component={Register} />
          <Stack.Screen name="AddressScreen" component={RegisterAddress} />
          <Stack.Screen name="ProofScreen" component={Proofs} />
          <Stack.Screen name="underReviewScreen" component={UnderReviewScreen} />
          <Stack.Screen name="underWaitingScreen" component={underWaitingScreen} />
          <Stack.Screen name="waitingScreen" component={waitingScreen} />
          <Stack.Screen name="TabNavigation" component={Tabnavigator} />
          <Stack.Screen name="Address" component={AddressScreen} />
          <Stack.Screen name="Basic" component={BasicInfoScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="Social" component={SocialScreen} />
          <Stack.Screen name="Plans" component={PlanScreen} />
          <Stack.Screen name="ElitePlans" component={ElitePlans} />
          <Stack.Screen name="BasicPlans" component={BasicPlans} />
          <Stack.Screen name="unSubscribe" component={unSubscribedScreen} />
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