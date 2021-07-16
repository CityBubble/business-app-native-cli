import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    duesDate: {
        fontSize: hp('2%'),
        color: '#fff'
    },
    dueUnderline: {
        backgroundColor: '#444444',
        height: hp('0.3%'),
        top: hp('0.4%')
    },
    dueCircle: {
        padding: wp('1.5%'),
        flexDirection: 'row',
        marginTop: hp('1.5%'),
        left:wp('1.9%'),
        
    },

    textDue: {
        flexDirection: 'row',
        alignItems: 'center',
        bottom: hp('5%')
    },
    textGenrate: {
       bottom:hp('2.8%'),
        width: wp('21.2%'),
        textAlign: 'center',
        color: '#fff',
        fontSize: hp('2.2%')
    },
    textCoupons: {
        bottom:hp('2.8'),
        width: wp('21.2%'),
        textAlign: 'center',
        color: '#fff',
        fontSize: hp('2.2%')
    },
    textDueleft: {
        bottom:hp('2.8%'),
        width: wp('14%'),
        textAlign: 'center',
        color: '#fff',
        fontSize: hp('2.2%')
    },
    InfoContainer: {
        alignItems: 'center',
        top: hp('4%')
    },
    warningDue: {
       flexDirection:'column',
        alignItems: 'center',
        width: wp('82%')
 },
    textWarning: {
        fontSize: hp('2.2%'),
        color: '#fff',
       },
    dueWarning: {
        color: '#4852ff',
        fontWeight: '800',
        fontSize: hp('2.2%'),
       
    },
    warningTextTwo: {
        fontSize: hp('2.2%'),
        color: '#fff',
        marginLeft:wp('2%')
      
    },
    ImageContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        bottom: hp('4%'),
     },
    GenratedText: {
        color: '#fff',
        fontSize: hp('2.5%'),
        fontWeight: '800',
        textAlign: 'center',
        bottom:hp('9%')
    },
    GenratedTextDue: {
        color: '#fff',
        fontSize: hp('2.5%'),
        bottom:hp('9%'),
        fontWeight: '800',
    },
    imageStyle: {
        width: wp('26%'),
        height: hp('14%')
    },
    WarningTextContainer:{
        flexDirection:'row',
        margin:hp('0.5%')
    }


})

export default styles