import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,Image} from 'react-native'
import AddDiscription from '../../components/adsComponent/addDiscription'
import BannerDiscription from '../../components/adsComponent/bannerDiscription'
import SubscriptionAlert from '../../components/adsComponent/subscriptionAlert'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DashboardHeader from '../../components/DashboardHeader'
const adScreen = ({ navigation }) => {
    const [change, setChange] = useState(true)
    const [Dues, setDues] = useState(false)
    const [cancel, setCancel] = useState(false)
    key = 1
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
                        IconStyle={styles.IconStyle}
                        iconPress={() => setCancel(true)} />)

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
                                <Image source={require('../../assets/Image/ScreenImage/plans.png')} style={{ width: 339, height: 274 }} />
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
                return(
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
    
                    <TouchableOpacity onPress={()=>{navigation.navigate('PlanDescriptions')}}>
                        <BannerDiscription
                            offerContainer={styles.offerContainer}
                            offer="Upto 20% Off"
                            state="Under Review"
                            statusColor={styles.statusText}
                            DateRequested="27 Oct,2021"
                        />
                    </TouchableOpacity>
                    <View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('PlanDescriptions')}}>
                        <BannerDiscription
                            offerContainer={styles.offerContainerPurple}
                            offer="Upto 20% Off"
                            state="Under Review"
                            statusColor={styles.statusTextPurple}
                            DateRequested="27 Oct,2021"
                        />
                         </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('PlanDescriptions')}}>
                        <BannerDiscription
                            offerContainer={styles.offerContainerGreen}
                            offer="Upto 20% Off"
                            state="Under Review"
                            statusColor={styles.statusTextGreen}
                            DateRequested="27 Oct,2021"
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

const styles = StyleSheet.create({
    adContainer: {
        flex: 1,
        backgroundColor: '#14161d'
    },
    alertBanner: {
        padding: 12,
        margin: 12,
        top: 20
    },
    alertContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 12,
        backgroundColor: '#EC8B40',
        borderRadius: 12,
        width: 370,
        right: 15
    },
    alertContainerTwoDays: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 12,
        backgroundColor: '#DC4D4D',
        borderRadius: 12,
        width: 370,
        right: 15
    },
    alertContainerEnd: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 12,
        backgroundColor: '#DC4D4D',
        borderRadius: 12,
        width: 370,
        height: 100,
        right: 15,
        alignItems: 'center'
    },
    warningtextStyle: {
        color: '#fff',
        letterSpacing: 0.65,
        fontSize: 20,
        padding: 12,
    },
    Texttwo: {
        color: '#fff',
        letterSpacing: 0.65,
        fontSize: 20,
        padding: 12,
        right: 14
    },
    warningtextStyleEnd: {
        color: '#fff',
        letterSpacing: 0.65,
        fontSize: 18,
        width: 270,
        left: 28
    },
    dayStyle: {
        color: '#fff',
        fontSize: 35,
        padding: 2,
        fontWeight: '700',
        right: 6
    },
    alertButton: {
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 12,
        right: 25
    },
    btnText: {
        fontWeight: '500'
    },
    IconStyle: {
        bottom: 35,
        left: 60
    },
    offerContainer: {
        backgroundColor: '#ECC710',
        padding: 12,
        width: 360,
        height: 90,
        right: 10,
        justifyContent: 'center'
    },
    offerContainerPurple: {
        backgroundColor: '#7726D4',
        padding: 12,
        width: 360,
        height: 90,
        right: 10,
        justifyContent: 'center'
    },
    offerContainerGreen: {
        backgroundColor: '#7726D4',
        padding: 12,
        width: 360,
        height: 90,
        right: 10,
        justifyContent: 'center'
    },
    statusText: {
        color: '#ECC710',
        letterSpacing: 0.7,
        left: 23,
        fontSize: 20
    },
    statusTextPurple: {
        color: '#7726D4',
        letterSpacing: 0.7,
        left: 23,
        fontSize: 20
    },
    statusTextGreen: {
        color: '#7726D4',
        letterSpacing: 0.7,
        left: 23,
        fontSize: 20
    },  dashboardScreenContainer: {
        backgroundColor: '#14161d',
        flex: 1,

    },
    dashboardScreenImage: {
        alignItems: 'center',
        top: 91,
        opacity: 1
    },
    dashboardScreenInput: {
        top: 80,
        alignItems: 'center',
    },

    textHeading: {
        fontSize: 25,
        fontWeight: '700',
        color: '#fff',
        letterSpacing: 0.75,
        padding: 12,
        textAlign:'center'
    },
    textParagarph: {
        color: '#DDDDDD',
        fontSize: 15,
        letterSpacing: 0.36,
        textAlign: 'center',
        width: 300
    },
    Logo: {
        marginTop: 20,
        width: 47,
        height: 37,

    },
    svgIcon:{
        top:14
    }
    ,
    Underline:{
        backgroundColor:'#0818A8',
       width:65,
       height:6,
       textAlign:'center',
       left:3
    },
    imageContainer:{
        top:50
    },
    plansButton:{
        top:89
    },
    btn:{
        alignItems:'center',
        top:10,
        
    },
    textBtn:{
        color:'#CDCDCD'
    },
    btnUnderline:{
        backgroundColor:'#4852ff',
        width:200,
        height:2,
        top:6
    },
    iconStyle:{
        textAlign:'center',
        top:10
    }
    
})
