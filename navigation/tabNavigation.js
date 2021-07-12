import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import PublishScreen from '../screens/PublishScreen'
import adsHistoryScreen from '../screens/adsHistoryScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PlansScreen from '../screens/PlansScreen';
import adScreen from '../screens/DashboardScreens/adScreen';
import Profile from '../screens/ProfileScreen';
import duesScreens from '../screens/DashboardScreens/duesScreens';
import PlanScreen from '../screens/PlansScreen';
import ElitePlans from '../screens/elitePlanScreen';
import BasicPlans from '../screens/basicPlanScreen';
import unSubscribedScreen from '../screens/unsubscribedScreen';

const Tab = createBottomTabNavigator()
const DashboardStack = createStackNavigator()

const DashboardStackScreen = () => {
    return (
        <DashboardStack.Navigator screenOptions={{ headerShown: false }}>
            <DashboardStack.Screen name="Home" component={adScreen} />
            <DashboardStack.Screen name="dueScreen" component={duesScreens} />
            <DashboardStack.Screen name="ProfileScreen" component={Profile} />
            <DashboardStack.Screen name="Plans" component={PlanScreen} />
            <DashboardStack.Screen name="ElitePlans" component={ElitePlans} />
            <DashboardStack.Screen name="BasicPlans" component={BasicPlans} />
            <DashboardStack.Screen name="unSubscribe" component={unSubscribedScreen} />

        </DashboardStack.Navigator>

    )
}

const Tabnavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{

            labelStyle: {
                fontSize: 15,

            },
            style: {
                backgroundColor: '#202433',
                height: 50,
                padding: 6

            },
            activeTintColor: '#4852ff'

        }}>

            <Tab.Screen name="Home" component={DashboardStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<Ionicons name="home-outline" size={24} color={focused ? '#4852ff' : '#707070'} />)
                }}
            />
            <Tab.Screen name="History " component={adsHistoryScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.SvgIcon}>
                        <MaterialIcons name="history" size={24} color={focused ? '#4852ff' : '#707070'} />
                    </View>
                )
            }} />
            <Tab.Screen name="Plans " component={PlansScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.SvgIcon}>
                        <FontAwesome name="rupee" size={24} color={focused ? '#4852ff' : '#707070'} />
                    </View>
                )
            }} />
            <Tab.Screen name="Publish" component={PublishScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.SvgIcon}>
                        <FontAwesome name="bullhorn" size={24} color={focused ? '#4852ff' : '#707070'} />
                    </View>
                )
            }} />
        </Tab.Navigator>
    )
}

export default Tabnavigator

const styles = StyleSheet.create({



})