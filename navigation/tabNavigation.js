import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import PublishScreen from '../screens/PublishScreen'
import adsHistoryScreen from '../screens/adsHistoryScreen'
import {Ionicons,FontAwesome} from 'react-native-vector-icons'
import PlansScreen from '../screens/PlansScreen';



const Tab = createBottomTabNavigator()

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

            <Tab.Screen name="Home" component={DashboardScreen}
                options={{
                    // tabBarIcon: ({focused }) => (<Ionicons name="home-outline" size={34} color={focused ? '#4852ff' : '#707070'} />)
                }}
            />
            <Tab.Screen name="Ad history " component={adsHistoryScreen} options={{
                // tabBarIcon: ({ focused }) => (
                //     <View style={styles.SvgIcon}>
                //   <MaterialIcons name="history" size={34} color={focused ? '#4852ff' : '#707070'} />
                //     </View>
                // )
            }} />
            <Tab.Screen name="Plans " component={PlansScreen} options={{
                // tabBarIcon: ({ focused }) => (
                //     <View style={styles.SvgIcon}>
                //         <FontAwesome name="rupee" size={34} color={focused ? '#4852ff' : '#707070'} />
                //     </View>
                // )
            }} />
            <Tab.Screen name="Publish Ad " component={PublishScreen} options={{
                // tabBarIcon: ({ focused }) => (
                //     <View style={styles.SvgIcon}>

                //         <FontAwesome name="bullhorn" size={34} color={focused ? '#4852ff' : '#707070'} />
                //     </View>
                // )
            }} />
        </Tab.Navigator>
    )
}

export default Tabnavigator

const styles = StyleSheet.create({



})