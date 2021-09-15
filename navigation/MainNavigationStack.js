import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import waitingScreen from '../screens/RegisterVendorScreens/WaitingScreen';
import UnderProcessScreen from '../screens/RegisterVendorScreens/UnderProcessScreen';
import GlobalStyles from '../components/GlobalStyles'
import Tabnavigator from '../navigation/tabNavigation';
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

export default function MainNavigationStack() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <StatusBar style="light" />
      <NavigationContainer  independent ={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"TabNavigation"} >
          <Stack.Screen name= "underProcessScreen" component={UnderProcessScreen}/>
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