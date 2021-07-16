import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    plansContainer: {
        flex: 1,
        backgroundColor: '#14161d'
    },
    SvgIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        top: hp('2%'),
        left: wp('2%')

    },
    TextHeading: {
        fontSize: hp('2%'),
        bottom: hp('1.5%'),
        right: wp('7%'),
        color: '#fff'
    },
    TextPara: {
        color: '#4852ff',
        bottom: hp('1.5%'),
        width: wp('42%'),
        fontSize: hp('2%'),
        right: wp('4.2%')
    },
    PriceTag: {
        alignItems: 'center',
        width: wp('92%'),
        left: wp('4%'),
        padding: wp('2%'),
        height: hp('12%'),
        backgroundColor: '#1C1F29',
        top: hp('4%')
    },
    bannerContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 100,
        left: wp('3%')
    },
    bannerText: {
        top: hp('1%'),
        right: wp('2%'),
    },
    bannerHeading: {
        fontSize: hp('3%'),
        letterSpacing: 0.48,
        color: '#fff',
        fontWeight: '800'
    },
    bannerParagarph: {
        fontSize: hp('2%'),
        top: hp('0.9%'),
        color: '#fff'
    },
    plansInfo: {
        top: hp('8%'),
        alignItems: 'center'
    },
    PlansText: {
        color: '#fff',
        fontSize: hp('2.2%'),
        letterSpacing: 0.52
    },
    UnderlinePlans: {
        backgroundColor: '#A5A5A5',
        width: wp('40%'),
        height: 0.8,
        top: hp('00.3%')
    },
    PlansCards: {
    margin: hp('2%')
    },
   
    PlansCardsDimond: {
        top: hp('2%')
    },
    PlansCardsFav: {
        top: hp('2%')
    },
    PlanUnderline: {
        backgroundColor: '#6324D2',
        width: wp('30%'),
        height: hp('0.2%'),
        top: hp('0.2%')
    },
    PlanUnderlineDiamond: {
        backgroundColor: '#FF7100',
        width: wp('30%'),
        height: hp('0.2%'),
        top: hp('0.2%')
    },
    PlanUnderlineFav: {
        backgroundColor: '#FFC288',
        width: wp('30%'),
        height: hp('0.2%'),
        top: hp('0.2%')
    },
    boxElite: {
        borderWidth: 4,
        alignItems: 'center',
        padding: wp('3%'),
        borderRadius: 10,
        borderColor: '#6324D2',
        width: wp('90%'),
        height: hp('33.9%'),
        top: hp('1%'),
        backgroundColor: '#14161d'
    },
    boxEliteDiamond: {
        borderWidth: 4,
        backgroundColor: '#14161d',
        alignItems: 'center',
        padding: wp('3%'),
        borderRadius: 10,
        borderColor: '#FF7100',
        width: wp('90%'),
        height: hp('33.5%'),
        // top: 10
    },
    boxEliteFav: {
        borderWidth: 4,
        alignItems: 'center',
        padding: wp('3%'),
        borderRadius: 10,
        borderColor: '#FFC228',
        backgroundColor: '#14161d',
        width: wp('90%'),
        height: hp('33.5%'),
        // top: 10
    },
    buttonName: {
        backgroundColor: '#6324D2',
        alignItems: 'center',
        padding: wp('1.3%'),
        top: hp('1%'),
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        width: wp('35%'),
        left: wp('7%')
    },
    buttonNameDiamond: {
        backgroundColor: '#FF7100',
        alignItems: 'center',
        padding: wp('1.3%'),
        top: hp('1%'),
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        width: wp('35%'),
        left: wp('7%')
    },
    buttonNameFav: {
        backgroundColor: '#FFC228',
        alignItems: 'center',
        padding: wp('1.3%'),
        top: hp('1%'),
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        width: wp('35%'),
        left: wp('7%')
    },
    buttonNameStyles: {
        backgroundColor: '#FD8B3C',
        alignItems: 'center',
        padding: wp('2%'),
        top: hp('1%'),
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        width: wp('40%'),
        left: wp('6%')
    },

    buttonNameStylesCrown: {
        backgroundColor: '#6324D2',
        alignItems: 'center',
        padding: wp('2%'),
        top: wp('2%'),
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        width: wp('40%'),
        left: wp('6%')
    },
    buttonNameStylesFav: {
        backgroundColor: '#FFC228',
        alignItems: 'center',
        padding: wp('2%'),
        top: wp('2%'),
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        width: wp('40%'),
        left: wp('6%')
    },
    premiumStyle: {
        backgroundColor: '#FD8B3C',
        width: wp('90%'),
        height: hp('13%'),
        alignItems: 'center',
        alignItems: 'center'
    },
    ElitePrice: {
        backgroundColor: '#7630C4',
        width: wp('90%'),
        alignItems: 'center',
        height: hp('13%'),
        alignItems: 'center'
    },
    ElitePriceFav: {
        backgroundColor: '#FFC228',
        width: wp('90%'),
        alignItems: 'center',
        height: hp('13%'),
        alignItems: 'center'
    },
    imgPlanElite: {
        width: wp('15.9%'),
        height: hp('6.7%')
    },
    imgPlanDiamond: {
        width: wp('10.9%'),
        height: hp('4.7%')
    },
    imgPlanFav: {
        width: wp('12.5%'),
        height: hp('6.5%')
    }


})

export default styles