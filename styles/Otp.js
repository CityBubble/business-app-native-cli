import { StyleSheet, Dimensions, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const otpstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14161D'
    },
    otpStyle: {
        flex: 1,
        padding: wp('1%')
    },
    otpHeading: {
        color: '#fff',
        marginTop: hp('6%'),
        marginHorizontal: Platform.OS === 'ios' ? wp('6%') : wp('7.2%'),
        fontSize: Platform.OS === 'ios' ? hp('3.2%') : hp('3.2%'),
        fontWeight: '700'
    },
    otpHeadingError: {
        color: '#fff',
        marginTop: hp('6%'),
        marginHorizontal: Platform.OS === 'ios' ? wp('6%') : wp('14.4%'),
        fontSize: Platform.OS === 'ios' ? hp('3.2%') : hp('3.2%'),
        fontWeight: '700'
    },
    otpText: {
        marginTop: hp('1.4%'),
        marginHorizontal: wp('3.6%'),
        color: '#ADADAD',
        fontSize: hp('2.2%'),
        letterSpacing: 1
    },
    otpTextTwo: {
        // marginTop: hp('1.0%'),
        marginHorizontal: wp('3.6%'),
        color: '#ADADAD',
        fontSize: hp('2.2%'),
        letterSpacing: 1
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('5%')
    },
    cellView: {
        paddingVertical: wp('3%'),
        width: 45,
        height: 53,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#fff'
    },
    cellViewWrongOtp: {
        paddingVertical: 13,
        width: 45,
        height: 53,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#E50027'
    },
    cellText: {
        textAlign: 'center',
        fontSize: hp('2%'),
        color: '#fff'
    },
    OtpTextChange: {
        color: '#fff',
        textAlign: 'center',
        padding: wp('2%'),
        marginTop: hp('1%'),
        fontSize: hp('2%')
    },

    textNumber: {
        color: '#4852ff',
        fontSize: hp('2.2%'),

    },

    icons: {
        left: wp('42%'),
        top: hp('2%')
    },
    textStyles: {
        left: wp('3.6%')
    },
    numberView: {
        flexDirection: 'row',
        alignItems: 'center'
    }


})




export default otpstyles