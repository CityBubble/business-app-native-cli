import { StyleSheet, Platform } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    adContainer: {
        flex: 1,
        backgroundColor: '#14161d'
    },
    alertBanner: {
        padding: wp('2%'),
        margin: hp('2%'),
        top: 20
    },
    alertContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        padding: wp('2%'),
        backgroundColor: '#EC8B40',
        borderRadius: 12,
        width: Platform.OS === 'ios' ? wp('94.2%') : wp('95%'),
        right: wp('3.2%')
    },
    alertContainerTwoDays: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        padding: wp('3%'),
        backgroundColor: '#DC4D4D',
        borderRadius: 12,
        width: Platform.OS === 'ios' ? wp('95.2%') : wp('95%'),
        right: wp('3%')
    },
    alertContainerEnd: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: '#DC4D4D',
        borderRadius: 12,
        width: Platform.OS === 'ios' ? wp('96.2%') : wp('96%'),
        height: Platform.OS === 'ios' ? wp('25%') : wp('24%'),
        right: Platform.OS === 'ios' ? wp('2%') : wp('3.2%'),
        alignItems: 'center'
    },
    warningtextStyle: {
        color: '#fff',
        letterSpacing: 0.65,
        fontSize: hp('2.5%'),
        padding: wp('4%'),
    },
    Texttwo: {
        color: '#fff',
        letterSpacing: 0.65,
        fontSize: hp('2.5%'),
        padding: wp('4%'),
        right: wp('7%')
    },
    warningtextStyleEnd: {
        color: '#fff',
        letterSpacing: 0.65,
        fontSize: hp('2.3%'),
        width: wp('63.6%'),
        left: wp('4%')
    },
    dayStyle: {
        color: '#fff',
        fontSize: hp('5%'),
        padding: wp('0.4%'),
        fontWeight: '700',
        right: wp('3%')
    },
    alertButton: {
        padding: wp('1.2%'),
        backgroundColor: '#fff',
        borderRadius: 12,
        right: wp('4%')
    },
    btnText: {
        fontWeight: '500'
    },
    IconStyle: {
        bottom: hp('4.6%'),
        left: wp('15%')
    },
    offerContainer: {
        backgroundColor: '#ECC710',
        width: wp('92%'),
        height: hp('14.5%'),
        right: wp('2%'),
        justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    offerContainerPurple: {
        backgroundColor: '#7726D4',
        width: wp('92%'),
        height: hp('14.5%'),
        right: wp('2%'),
        justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    offerContainerGreen: {
        backgroundColor: '#7726D4',
        width: wp('92%'),
        height: hp('14.5%'),
        right: wp('2%'),
        justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    statusText: {
        color: '#ECC710',
        letterSpacing: 0.7,
        left: wp('2%'),
        fontSize: wp('4.3%'),
        fontWeight: '800'
    },
    statusTextPurple: {
        color: '#9370DB',
        letterSpacing: 0.7,
        left: wp('3%'),
        fontSize: wp('4.5%'),
        fontWeight: '800'
    },
    statusTextGreen: {
        color: '#9370DB',
        letterSpacing: 0.7,
        left: wp('3%'),
        fontSize: wp('4.3%'),
        fontWeight: '800'
    },
    dashboardScreenContainer: {
        backgroundColor: '#14161d',
        flex: 1,
        fontWeight: '800'
    },
    dashboardScreenImage: {
        alignItems: 'center',
        top: hp('5%'),
        opacity: 1
    },
    dashboardScreenInput: {
        top: hp('2%'),
        alignItems: 'center',
    },

    textHeading: {
        fontSize: hp('3.5%'),
        fontWeight: '700',
        color: '#fff',
        letterSpacing: 0.75,
        padding: wp('2.5%'),
        textAlign: 'center'
    },
    textParagarph: {
        color: '#DDDDDD',
        fontSize: hp('2%'),
        letterSpacing: 0.36,
        textAlign: 'center',
        width: wp('78%')
    },


    imageContainer: {
        top: hp('5%')
    },
    plansButton: {
        top: hp('11%')
    },
    btn: {
        alignItems: 'center',
        top: hp('1.7%'),

    },
    textBtn: {
        color: '#CDCDCD'
    },
    btnUnderline: {
        backgroundColor: '#4852ff',
        width: wp('50%'),
        height: hp('0.3%'),
        top: hp('1%')
    },
    iconStyle: {
        textAlign: 'center',
        top: 10
    },
    IconMove: {
        right: Platform.OS == 'ios' ? wp('3.8%') : wp('1.6%')
    },
    ImageStyles: {
        width: wp('70%'),
        height: hp('35%')
    },
    scrollStyle:{
marginBottom:hp('10%')
    }
  

})
export default styles