import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    RefreshModalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    RefreshModalAlert: {
        width: wp('80'),
        height: hp('35%'),
        backgroundColor: '#262626',
        borderRadius: 20,
        elevation: 20,
    },
    RefreshModalText: {
        top: hp('1%'),
        alignItems: 'center',

    },

    RefreshModalHeading: {
        fontSize: hp('2.2%'),
        color: '#fff',
        fontWeight: '800'
    },
    RefreshModalPara: {
        fontSize: hp('2%'),
        color: '#fff',
        textAlign: 'center',
        padding: wp('3%')
    },
    btnCalender: {
        top: hp('1%'),
        alignItems: 'center'
    },
    calenderStyles: {
        backgroundColor: '#000',
        borderRadius: 12,
        width: hp('30%'),
        height: hp('5%'),
        alignItems: "center"

    },
    calenderText: {
        color: '#fff',
        marginTop: hp('1%'),
        alignItems: "center"
    },
    btnView: {
        top: hp('2.5%'),
        alignItems: 'center'
    },
    buttonStyles: {
        backgroundColor: '#4852ff',
        padding: wp('2%'),
        width: wp('20%'),
        alignItems: 'center',
        borderRadius: 12,

    },
    btnText: {
        color: '#fff',
        fontSize: hp('2%'),
        fontWeight: '700'
    },
    cross:
    {
        alignItems: 'flex-end', 
        top: hp('2%'),
        right: wp('2%')
    },
    imageStyles:
    {
        width: wp('11%'),
        height: hp('6%'),
        left: wp('34%'),
        bottom:hp('2.5%')
    
    }



})

export default styles