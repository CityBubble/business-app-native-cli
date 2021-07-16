import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import AddDiscription from '../../components/adsComponent/addDiscription'
import BannerDiscription from '../../components/adsComponent/bannerDiscription'
import SubscriptionAlert from '../../components/adsComponent/subscriptionAlert'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DashboardHeader from '../../components/DashboardHeader'
import styles from '../../styles/dashboardScreen/adScreen'
const adScreen = ({ navigation }) => {
    const [change, setChange] = useState(true)
    const [Dues, setDues] = useState(false)
    const [cancel, setCancel] = useState(false)
    key = 2
    state = 2
    const AddsChange = () => {

        setChange(true)
        setDues(false)
    }
    const DuesChange = () => {
        navigation.navigate('dueScreen')
        setDues(true)
        setChange(false)
    }

    const cancelAlert = () => {
        switch (key) {
            case 1:
                if (cancel) {

                }
                else {
                    return (<SubscriptionAlert
                        Warningtext="Subscription expires in"
                        WarningtextStyle={styles.warningtextStyle}
                        WarningtextStyleTwo={styles.Texttwo}
                        Days="5 "
                        DaysStyle={styles.dayStyle}
                        alertText="days"
                        alertHeading={styles.alertContainer}
                        IconName={'times'}
                        IconStyle={styles.IconMove}
                        iconPress={() => setCancel(true)}
                         />)
 
                    }
                break;
            case 2:
                if (cancel) {

                }
                else {
                    return (<SubscriptionAlert
                        Warningtext="Subscription expires in"
                        WarningtextStyle={styles.warningtextStyle}
                        WarningtextStyleTwo={styles.Texttwo}
                        Days="2"
                        DaysStyle={styles.dayStyle}
                        alertText="days"
                        alertHeading={styles.alertContainerTwoDays}
                        IconName={'times'}
                        IconStyle={styles.IconMove}
                        iconPress={() => setCancel(true)} />)
                }
                break;
            case 3:
                if (cancel) {

                }
                else {
                    return (<SubscriptionAlert
                        Warningtext="Your ads are freezed kindly subscribe to resume"
                        WarningtextStyle={styles.warningtextStyleEnd}
                        WarningtextStyleTwo={styles.Texttwo}
                        alertHeading={styles.alertContainerEnd}
                        buttonStyle={styles.alertButton}
                        buttonTextStyle={styles.btnText}
                        IconName={'times'}
                        iconPress={() => setCancel(true)}
                        buttonName="Check Plans"
                        IconStyle={styles.IconStyle}
                        navigation={() => { navigation.navigate('Plans') }}
                    />)
                }
                break;

            default:
                break;
        }


    }

    const HomeScreen = () => {
        switch (state) {
            case 1:
                return (
                    <View style={styles.dashboardScreenContainer}>
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
                                <Image source={require('../../assets/Image/ScreenImage/plans.png')} style={styles.ImageStyles} />
                            </View>
                        </View>
                        <View style={styles.dashboardScreenInput}>

                            <TouchableOpacity style={styles.plansButton} onPress={() => navigation.navigate('Plans')}>
                                <Text style={styles.textParagarph} >Publish your first Ad</Text>
                                <FontAwesome name="bullhorn" size={34} color='#fff' style={styles.iconStyle} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
                break;

            case 2:
                return (
                    <View>

                        <View style={styles.alertBanner}>
                            {cancelAlert()}
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            scrollEventThrottle={16}
                            
                        >
                            <View style={styles.addDiscription}>
                                <TouchableOpacity onPress={() => navigation.navigate('AddDescriptions')}>
                                    <AddDiscription
                                        Image={require('../../assets/plans/veg.jpg')}
                                        date="27 Oct, 2021"
                                        ticket="300 coupons"
                                        Views="1000 views"
                                    />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity onPress={() => { navigation.navigate('PlanDescriptions') }}>
                                <BannerDiscription
                                    offerContainer={styles.offerContainer}
                                    offer="Upto 20% Off"
                                    state="Under Review"
                                    statusColor={styles.statusText}
                                    DateRequested="27 Oct, 2021"
                                />
                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity onPress={() => { navigation.navigate('PlanDescriptions') }}>
                                    <BannerDiscription
                                        offerContainer={styles.offerContainerPurple}
                                        offer="Upto 20% Off"
                                        state="Under Review"
                                        statusColor={styles.statusTextPurple}
                                        DateRequested="27 Oct, 2021"
                                    />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { navigation.navigate('PlanDescriptions') }}>
                                    <BannerDiscription
                                        offerContainer={styles.offerContainerGreen}
                                        offer="Upto 20% Off"
                                        state="Under Review"
                                        statusColor={styles.statusTextPurple}
                                        DateRequested="27 Oct, 2021"
                                    />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                )
                break;
        }
    }


    return (
        <View style={styles.adContainer}>
            <DashboardHeader
                uri='https://images.pexels.com/photos/7597322/pexels-photo-7597322.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                onPress={() => { navigation.navigate('ProfileScreen') }}
                add={AddsChange}
                TextButton={{
                    fontSize: 22,
                    color: change ? '#4852FF' : '#A5A5A5',
                    fontWeight: '700',
                    textAlign: 'center'
                }}

                underline={{
                    backgroundColor: change ? "#4852FF" : 'transparent',
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
                dues={DuesChange}
            />
            {HomeScreen()}
        </View>
    )
}

export default adScreen


