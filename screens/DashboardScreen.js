import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Image, StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DashboardHeader from '../components/DashboardHeader'

import styles from '../styles/DashboardScreen'
const DashboardScreen = ({ navigation }) => {
    const [change, setChange] = useState(false)
    const [Dues, setDues] = useState(false)

    const AddsChange = () => {
        navigation.navigate('Ads')
        setChange(true)
        setDues(false)
    }
    const DuesChange = () => {
        navigation.navigate('Ads')
        setDues(true)
        setChange(false)
    }
    return (
        <View style={styles.dashboardScreenContainer}>
            <DashboardHeader
                uri='https://images.pexels.com/photos/7597322/pexels-photo-7597322.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                onPress={() => { navigation.navigate('ProfileScreen') }}
                add={AddsChange}
                TextButton={{
                    fontSize: 19,
                    color: change ? '#0818A8' : '#A5A5A5',
                    fontWeight: '500'
                }}

                TextButtonTwo={{
                    fontSize: 19,
                    color: Dues ? '#0818A8' : '#A5A5A5',
                    fontWeight: '700'
                }}
                due={DuesChange}
            />
            <View style={styles.dashboardScreenImage}>
                <View style={styles.textContainer}>
                    <Text style={styles.textHeading} >Congratulations</Text>
                    <Text style={styles.textParagarph}>You made it to the promotional period</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Plans')}>
                        <Text style={styles.textBtn}>Visit plans to view your reward</Text>
                        <Text style={styles.btnUnderline}></Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/Image/ScreenImage/plans.png')} style={{ width: 339, height: 274 }} />
                </View>
            </View>
            <View style={styles.dashboardScreenInput}>

                <TouchableOpacity style={styles.plansButton} onPress={() => navigation.navigate('Plans')}>
                    <Text style={styles.textParagarph} >Publish your first reward</Text>
                    <FontAwesome name="bullhorn" size={34} color='#4852ff' style={styles.iconStyle} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DashboardScreen