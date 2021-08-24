import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import DashboardHeader from '../../components/DashboardHeader'
import DuesComponents from '../../components/DuesComponents'
import OverallDues from '../../components/OverallDues'
import styles from '../../styles/dashboardScreen/duesScreen'
const duesScreens = ({ navigation }) => {
    const [Dues, setDues] = useState(true)
    const [active, setActive] = useState(true)
    const [current, setCurrent] = useState(false)
    const [Overall, setOverall] = useState(false)
    let state = ""

    const AddsChange = () => {
        navigation.navigate('Home')
    }
    const DuesChange = () => {
        setDues(false)
    }
    const setUp = () => {
        setActive(true)
        setCurrent(false)
        setOverall(false)
    }
    const setUpCurrent = () => {
        setActive(false)
        setCurrent(true)
        setOverall(false)
    }
    const setUpOverall = () => {
        setActive(false)
        setCurrent(false)
        setOverall(true)
    }
    const ScreenDisplay = () => {
        if (active) {
            if (state === "end") {
                return (
                    <DuesComponents
                        date="16 Oct -16 Nov,2021"
                        addGenrated="02"
                        Coupons='15'
                        dues="1500"
                        warningText="Please clear your previous dues by"
                        duesText="19 Nov,2021"
                        warningTextTwo="to avoid ad freeze"
                        ButtonStyles={styles.btnStyles}
                        ButtonName="Pay Now"
                        duesContainer={styles.DueContainer}
                    />)
            }
            else {
                return (
                    <ScrollView
                        scrollEventThrottle={16}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.dueSetup}>
                            <Text style={styles.HeadingDue}>You have cleared all your dues</Text>
                            <View style={styles.dueCard}>
                                <DuesComponents
                                    date="16 Oct - 16 Nov,2021"
                                    addGenrated="01"
                                    Coupons='20'
                                    dues="2000"
                                    duesContainer={styles.DueSmallConatiner}
                                />
                                <Image source={require('../../assets/plans/tick.png')} style={{ width: 43, height: 43, right: 28, bottom: 20 }} />

                            </View>
                            <View style={styles.dueCard}>
                                <DuesComponents
                                    date="16 Oct - 16 Nov,2021"
                                    addGenrated="01"
                                    Coupons='20'
                                    dues="2000"
                                    duesContainer={styles.DueSmallConatiner}
                                />
                                <Image source={require('../../assets/plans/tick.png')} style={{ width: 43, height: 43, right: 28, bottom: 20 }} />

                            </View>
                        </View>
                    </ScrollView>
                )
            }
        }
        else if (current) {
            if (state === "end") {

                return (

                    <DuesComponents
                        date="16 Oct -16 Nov,2021"
                        addGenrated="02"
                        Coupons='15'
                        dues="1500"
                        warningText="Please clear your previous dues by"
                        duesText="19 Nov,2021"
                        warningTextTwo="to avoid ad freeze"
                        ButtonStyles={styles.btnStyles}
                        ButtonName="Pay Now"
                        duesContainer={styles.DueContainer}

                    />
                )
            }
            else {
                return (
                    <DuesComponents
                        date="16 Oct -16 Nov,2021"
                        addGenrated="01"
                        Coupons='20'
                        dues="2000"
                        duesContainer={styles.DueSmallConatiner}
                    />
                )
            }
        }
        else if (Overall) {
            return (
                <OverallDues
                    date="16 Oct -30 Dec ,2021"
                    genrated="30"
                />
            )
        }
    }
    return (
        <View style={styles.duesContainer}>
            <DashboardHeader
                uri='https://images.pexels.com/photos/7597322/pexels-photo-7597322.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                onPress={() => { navigation.navigate('ProfileScreen') }}
                add={AddsChange}
                TextButton={{
                    fontSize: 22,
                    color: '#A5A5A5',
                    fontWeight: '700',
                    textAlign: 'center'
                }}
                underline={{
                    backgroundColor: 'transparent',
                    width: 69,
                    height: 3,
                    top: 2
                }}
                TextButtonTwo={{
                    fontSize: 22,
                    color: Dues ? '#4852FF' : '#A5A5A5',
                    fontWeight: '700',
                    textAlign: 'center'
                }}
                underlineTwo={{
                    backgroundColor: Dues ? "#4852FF" : 'transparent',
                    width: 69,
                    height: 3,
                    top: 2
                }}
                dues={DuesChange} />
            <View style={styles.dueTab}>
                <TouchableOpacity onPress={setUp} style={{ backgroundColor: active ? '#4852ff' : 'transparent', padding: 12, borderRadius: 12 }}>
                    <Text style={styles.dueText}>Previous</Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={setUpCurrent} style={{ backgroundColor: current ? '#4852ff' : 'transparent', padding: 12, borderRadius: 12 }}>
                    <Text style={styles.dueText}>Current</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={setUpOverall} style={{ backgroundColor: Overall ? '#4852ff' : 'transparent', padding: 12, borderRadius: 12 }}>
                    <Text style={styles.dueText}>Overall</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                {ScreenDisplay()}
            </View>
        </View>
    )
}

export default duesScreens

