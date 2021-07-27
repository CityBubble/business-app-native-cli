import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Svg, { Path, G } from 'react-native-svg'
import styles from '../styles/plans'
import SubscriptionTag from '../components/SubscriptionTag'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import PlansInfo from '../components/PlansInfo'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

let state = "Under Promotional"
let plans = "AboutToFinish"
key=1
const PlanScreen = ({ navigation }) => {
    const Screen = () => {
        switch (key) {
            case 0:
                return (
                    <View style={styles.plansContainer}>

                        <View style={styles.SvgIcon}>


                            <Svg width="100" height="53" viewBox="0 0 35 45.054">

                                <G transform="translate(3.489 0.139)">
                                    <Path
                                        fill='#FF8129'
                                        fillRule="evenodd"
                                        d="M128.493,93.769c0-.249-.327-.438-.576-.438l-7.027-.078c-.249,0-.551.2-.551.451a.7.7,0,0,0,.551.609h2.132a2.05,2.05,0,0,1,2.141,1.673H121.2a.451.451,0,0,0-.451.451c0,.249.2.659.451.659h3.964a2.01,2.01,0,0,1-2.141,1.623H121.2a.451.451,0,0,0-.31.778l4.556,4.3a.45.45,0,0,0,.637-.018c.171-.181.272-.556.091-.727l-3.564-3.436.763.118a3.027,3.027,0,0,0,3.068-2.642h1.476a.687.687,0,0,0,.576-.57.656.656,0,0,0-.576-.54h-1.476a2.833,2.833,0,0,0-.974-1.674h2.451a.661.661,0,0,0,.576-.544Zm.181-.064" transform="translate(-112.204 -84.287)" />
                                    <Path
                                        fill='#FF8129'
                                        fillRule="evenodd"
                                        d="M.592,14.775a.434.434,0,0,0,.332.348.446.446,0,0,0,.457-.167l.948-1.269a11.083,11.083,0,0,0,6.348,1.944A11.171,11.171,0,0,0,19.856,4.589,10.784,10.784,0,0,0,19.011.351.619.619,0,0,0,18.6.018a.907.907,0,0,0-.572.068.644.644,0,0,0-.3.686,9.474,9.474,0,0,1,.707,3.821,9.387,9.387,0,0,1-9.754,9.634A9.065,9.065,0,0,1,3.217,12.5l1.039-1.391a.432.432,0,0,0,.026-.479.44.44,0,0,0-.436-.209l-3.461.454a.446.446,0,0,0-.3.174.433.433,0,0,0-.081.333Zm2.341-3.357-1.045,1.4,0,0,0,.006-.592.793L.953,11.677Zm0,0" transform="translate(4.651 6.792) rotate(13)" />
                                    <Path
                                        fill='#FF8129'
                                        fillRule="evenodd"
                                        d="M.595,14.711a.435.435,0,0,0,.779.184l.932-1.265a10.9,10.9,0,0,0,6.272,1.962A11.006,11.006,0,0,0,18.733.352a.618.618,0,0,0-.407-.334.884.884,0,0,0-.565.066.644.644,0,0,0-.293.685,9.6,9.6,0,0,1,.71,3.821,9.256,9.256,0,0,1-9.6,9.6,8.918,8.918,0,0,1-5.4-1.743L4.2,11.059a.435.435,0,0,0-.406-.69l-3.415.443a.435.435,0,0,0-.373.506Zm2.3-3.348L1.868,12.758l0,0,0,.006-.582.79L.942,11.617Zm0,0" transform="translate(18.932 19.727) rotate(-166)" />
                                </G>
                            </Svg>
                            <Text style={styles.TextHeading}>You are currently</Text>
                            <Text style={styles.TextPara}>{state}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.TextHeadingTwo} >Enjoy publishing ads for free</Text>
                        </View>

                        <View style={styles.PriceTag}>
                            <SubscriptionTag
                                Image={require('../assets/plans/diamond.png')}
                                ImageStyle={{ width: wp('5%'), height: hp('2%') }}
                                price={styles.premiumStyle}
                                planName="Premium"
                                planPrice="1999"
                                month="@1 Month"
                                Starting="21 september 2021"
                                Ending="21 september 2022"
                                AdsLeft="10"
                            />
                        </View>
                    </View>)
                break;
            case 1:
                return (
                    <View style={styles.plansContainer}>

                        <View style={styles.SvgIcon}>

                            <Svg width="100" height="53" viewBox="0 0 35 45.054">

                                <G transform="translate(3.489 0.139)">
                                    <Path
                                        fill='#FF8129'
                                        fillRule="evenodd"
                                        d="M128.493,93.769c0-.249-.327-.438-.576-.438l-7.027-.078c-.249,0-.551.2-.551.451a.7.7,0,0,0,.551.609h2.132a2.05,2.05,0,0,1,2.141,1.673H121.2a.451.451,0,0,0-.451.451c0,.249.2.659.451.659h3.964a2.01,2.01,0,0,1-2.141,1.623H121.2a.451.451,0,0,0-.31.778l4.556,4.3a.45.45,0,0,0,.637-.018c.171-.181.272-.556.091-.727l-3.564-3.436.763.118a3.027,3.027,0,0,0,3.068-2.642h1.476a.687.687,0,0,0,.576-.57.656.656,0,0,0-.576-.54h-1.476a2.833,2.833,0,0,0-.974-1.674h2.451a.661.661,0,0,0,.576-.544Zm.181-.064" transform="translate(-112.204 -84.287)" />
                                    <Path
                                        fill='#FF8129'
                                        fillRule="evenodd"
                                        d="M.592,14.775a.434.434,0,0,0,.332.348.446.446,0,0,0,.457-.167l.948-1.269a11.083,11.083,0,0,0,6.348,1.944A11.171,11.171,0,0,0,19.856,4.589,10.784,10.784,0,0,0,19.011.351.619.619,0,0,0,18.6.018a.907.907,0,0,0-.572.068.644.644,0,0,0-.3.686,9.474,9.474,0,0,1,.707,3.821,9.387,9.387,0,0,1-9.754,9.634A9.065,9.065,0,0,1,3.217,12.5l1.039-1.391a.432.432,0,0,0,.026-.479.44.44,0,0,0-.436-.209l-3.461.454a.446.446,0,0,0-.3.174.433.433,0,0,0-.081.333Zm2.341-3.357-1.045,1.4,0,0,0,.006-.592.793L.953,11.677Zm0,0" transform="translate(4.651 6.792) rotate(13)" />
                                    <Path
                                        fill='#FF8129'
                                        fillRule="evenodd"
                                        d="M.595,14.711a.435.435,0,0,0,.779.184l.932-1.265a10.9,10.9,0,0,0,6.272,1.962A11.006,11.006,0,0,0,18.733.352a.618.618,0,0,0-.407-.334.884.884,0,0,0-.565.066.644.644,0,0,0-.293.685,9.6,9.6,0,0,1,.71,3.821,9.256,9.256,0,0,1-9.6,9.6,8.918,8.918,0,0,1-5.4-1.743L4.2,11.059a.435.435,0,0,0-.406-.69l-3.415.443a.435.435,0,0,0-.373.506Zm2.3-3.348L1.868,12.758l0,0,0,.006-.582.79L.942,11.617Zm0,0" transform="translate(18.932 19.727) rotate(-166)" />
                                </G>
                            </Svg>
                            <Text style={styles.TextHeading}>You are currently</Text>
                            <Text style={styles.TextPara}>{state}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.TextHeadingTwo} >Your plan is about to end kindly renew plan</Text>
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            scrollEventThrottle={16}
                        >

                            <View style={styles.PriceTag}>
                                <SubscriptionTag
                                    Image={require('../assets/plans/diamond.png')}
                                    planName="Premium"
                                    Icon="refresh"
                                    ImageStyle={{ width: wp('5%'), height: hp('2%') }}
                                    price={styles.premiumStyle}
                                    planPrice="1999"
                                    month="@1 month"
                                    Starting="21 September, 2021"
                                    Ending="21 September, 2022"
                                    AdsLeft="10"
                                    ButtonName="Renew plan"
                                    buttonNameStyles={styles.buttonNameStyles}
                                    onPress={() => navigation.navigate('ElitePlans')}
                                />
                            </View>
                            <View style={styles.plansInfo}>
                                <Text style={styles.PlansText}>Check other plans</Text>
                                <Text style={styles.UnderlinePlans}></Text>
                                <View style={styles.PlansCards}>
                                    <PlansInfo
                                        styleBox={styles.boxElite}
                                        Image={require('../assets/plans/Crown.png')}
                                        ImageStyle={styles.imgPlanElite}
                                        PlanName="Elite"
                                        Underline={styles.PlanUnderline}
                                        iconColor='#6324D2'
                                        TextFirst="6 ads a month"
                                        TextSecond="Ranks on top of other ads"
                                        TextThird="More customer engagement"
                                        ButtonName="Select plan"
                                        buttonNameStyles={styles.buttonName}
                                        onPress={()=>{navigation.navigate('ElitePlanData')}}
                                    />
                                </View>
                                <View style={styles.PlansCards}>
                                    <PlansInfo
                                        styleBox={styles.boxEliteDiamond}
                                        Image={require('../assets/plans/diamond.png')}
                                        ImageStyle={styles.imgPlanDiamond}
                                        PlanName="Premium"
                                        Underline={styles.PlanUnderlineDiamond}
                                        iconColor='#FF7100'
                                        TextFirst="6 ads a month"
                                        TextSecond="Ranks on top of other ads"
                                        TextThird="More customer engagement"
                                        ButtonName="Select plan"
                                        buttonNameStyles={styles.buttonNameDiamond}
                                        onPress={()=>{navigation.navigate('PremiumPlan')}}
                                    />
                                </View>
                                <View style={styles.PlansCards}>
                                    <PlansInfo
                                        styleBox={styles.boxEliteFav}
                                        Image={require('../assets/plans/favourites.png')}
                                        ImageStyle={styles.imgPlanFav}
                                        PlanName="Basic"
                                        Underline={styles.PlanUnderlineFav}
                                        iconColor='#FFC228'
                                        TextFirst="6 ads a month"
                                        TextSecond="Ranks on top of other ads"
                                        TextThird="More customer engagement"
                                        ButtonName="Select plan"
                                        buttonNameStyles={styles.buttonNameFav}
                                        onPress={()=>{navigation.navigate('BasicPlanData')}}
                                    />
                                </View>
                            </View>

                        </ScrollView>
                    </View>)
                break;
            default:
                break;
        }


    }


    return (
        <>
            {Screen()}
        </>
    )
}

export default PlanScreen
