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
import premiumPlans from '../screens/PlanData/premiumPlans';
import ElitePlansData from '../screens/PlanData/elitePlans';
import BasicPlansData from '../screens/PlanData/basicPlans';
import AddDescriptions from '../screens/AddDescriptions';
import Descriptions from '../screens/Descriptions';


const Stack = createStackNavigator()

export default function Navigation() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <StatusBar style="light" />
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Tabnavigator}  >
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
          <Stack.Screen name="ProfileScreen" component={Profile} />
          <Stack.Screen name="Address" component={AddressScreen} />
          <Stack.Screen name="Basic" component={BasicInfoScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="Social" component={SocialScreen} />
          <Stack.Screen name="PremiumPlan" component={premiumPlans} />
          <Stack.Screen name="ElitePlanData" component={ElitePlansData} />
          <Stack.Screen name="BasicPlanData" component={BasicPlansData} />
          <Stack.Screen name="AddDescriptions" component={AddDescriptions} />
          <Stack.Screen name="PlanDescriptions" component={Descriptions} />
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