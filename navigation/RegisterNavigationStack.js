import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import RegisterAddress from '../screens/RegisterVendorScreens/RegisterAddressScreen';
import Otp from '../screens/RegisterVendorScreens/OtpScreen'
import Login from '../screens/RegisterVendorScreens/MobileLoginScreen'
import Location from '../screens/RegisterVendorScreens/LocationScreen'
import Register from '../screens/RegisterVendorScreens/RegisterScreen'
import Proofs from '../screens/RegisterVendorScreens/RegisterVendorScreen'
import waitingScreen from '../screens/RegisterVendorScreens/WaitingScreen';
import UnderReviewScreen from '../screens/RegisterVendorScreens/UnderProcessScreen';
import BasicInfoScreen from '../screens/forms/BasicInfoScreen';
import ContactScreen from '../screens/forms/ContactScreen';
import SocialScreen from '../screens/forms/SocialScreen';
import premiumPlans from '../screens/PlanData/premiumPlans';
import ElitePlansData from '../screens/PlanData/elitePlans';
import BasicPlansData from '../screens/PlanData/basicPlans';
import AddDescriptions from '../screens/AddDescriptions';
import Descriptions from '../screens/Descriptions';
// Updating the Navigation Stack
import Tabnavigator from '../navigation/tabNavigation';
import Profile from '../screens/ProfileScreen';
import AddressScreen from '../screens/forms/AddressScreen';



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
            <Stack.Screen name= "underProcessScreen" component={UnderReviewScreen}/>
            <Stack.Screen name="TabNavigation" navigationOptions = {{
                headerLeft: null
            }} component={Tabnavigator} />
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


export default RegisterNavigationStack;
