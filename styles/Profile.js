import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    containerProfile: {
        flex: 1,
        backgroundColor: '#14161d'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: hp('1.5%')

    },
    Hamburger: {
        top: hp('1.5%'),
        right: wp('6%')
    },

    HeaderImage: {
        left: wp('6%'),
        top: hp('1.5%')
    },
    profilePicture: {
        justifyContent: 'center',
        alignItems: 'center',
        top: hp('3%')
    },
    UploadProfile: {
        alignItems: 'center',
        borderRadius: 100,
        padding: wp('2%'),
        bottom: hp('4.2%'),
        left: wp('18%'),
        width: wp('8%'),
        backgroundColor: '#707070'
    },
    bussinessName: {
        color: "#fff",
        letterSpacing: 0.7,
        textAlign: 'center',
        fontSize: hp('3%'),
        fontWeight: '600',
        bottom: wp('3%')
    },
    socialMedia: {
        flexDirection: 'row',
        top: hp('0.2%')
    },
    socialIcons: {
        padding: wp('2%')
    }, 
    underline: {
        top: wp('9%')
    },
     underlineText: {
        backgroundColor: '#2B2C2E',
        height: hp('0.2%')
    },
    accountInformation: {
        top: hp('8%'),
        left: wp('10%')
    },
    accountInformationHeading: {
        color: '#fff',
        fontSize: hp('2.5%'),
        fontWeight: '700',
        letterSpacing: 0.48,

    },
    accountInformationBox: {
        flexDirection: 'row',
        alignItems: 'center',
        top: hp('1%'),
        backgroundColor: '#20202A',
        width: wp('80%'),
        padding: wp('2%'),
        borderRadius: 15,
        height: hp('6%'),
  },
    infoWrap: {
        paddingVertical: wp('2%')
    }

})





export default styles