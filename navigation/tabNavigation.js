import React from 'react'
import { StyleSheet, Text, View, Image,SafeAreaView , StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'

import DashboardScreen from '../screens/DashboardScreen';
import PublishScreen from '../screens/PublishScreen'
import adsHistoryScreen from '../screens/adsHistoryScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { createStackNavigator } from '@react-navigation/stack';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import PlansScreen from '../screens/PlansScreen';
import Profile from '../screens/ProfileScreen';
import PlanScreen from '../screens/PlansScreen';
import GlobalStyles from '../components/GlobalStyles'






const Tab = createBottomTabNavigator()


const DashboardStack = createStackNavigator();

function DashboardStackScreen() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <StatusBar style="light" />
            <DashboardStack.Navigator screenOptions={{ headerShown: false }}>
                <DashboardStack.Screen name="Home" component={DashboardScreen} />
                <DashboardStack.Screen name="Plans" component={PlanScreen} />
            </DashboardStack.Navigator>
    </SafeAreaView>
  );
}


const Tabnavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{

            labelStyle: {
                fontSize: 15
            },
            style: {
                backgroundColor: '#202433',
                height: 60,
                padding: 6

            }

        }}>

            <Tab.Screen name="Home" component={DashboardStackScreen}
                options={{
                    tabBarIcon: ({focused }) => (<Ionicons name="home-outline" size={34} color={focused ? '#4852ff' : '#707070'} />)
                }}
            />
            <Tab.Screen name="Ad history " component={adsHistoryScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.SvgIcon}>
                  <MaterialIcons name="history" size={34} color={focused ? '#4852ff' : '#707070'} />
                    </View>
                )
            }} />
            <Tab.Screen name="Plans " component={PlansScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.SvgIcon}>
                        <FontAwesome name="rupee" size={34} color={focused ? '#4852ff' : '#707070'} />
                    </View>
                )
            }} />
            <Tab.Screen name="Publish Ad " component={PublishScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.SvgIcon}>

                        <FontAwesome name="bullhorn" size={34} color={focused ? '#4852ff' : '#707070'} />
                    </View>
                )
            }} />
        </Tab.Navigator>
    )
}

export default Tabnavigator

const styles = StyleSheet.create({



})