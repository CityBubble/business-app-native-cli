import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    discriptionAdd: {
        // flex: 1,
        backgroundColor: '#292930',
        width: wp('92%'),
        height: hp('35%'),
        borderRadius: 20
    },
    durationHeading: {
        flexDirection: 'row',
        padding:wp('3%'),
        alignItems: 'center'
    },
    IconBorder: {
        borderWidth: 1,
        padding: wp('0.9%'),
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    informationDuration: {
        marginLeft: wp('20%')
    },
    HeadingStyle: {
        fontSize: hp('2.5%'),
        marginLeft: wp('2%'),
        color: '#fff',
        fontWeight: '700'
    },

    infoFirst: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: wp('1%')
    },
    infoSecond: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: wp('1%')
    },
    textHeading: {
        textAlign: "left",
        fontSize: hp('2.2%'),
        letterSpacing: 0.36,
        width: wp('50%'),
        color: '#CDCDCD'
    },
    Date: {
        color: '#fff',
        fontSize: hp('2%'),
        letterSpacing: 0.36,
        width: wp('50%'),
        left: wp('12%'),
        fontWeight: '700'
    },
    underline: {
        backgroundColor: '#AFAFAF',
        height: 0.7,
        top: hp('1.2%'),
    },
    underlineTwo: {
        backgroundColor: '#AFAFAF',
        height: 0.7,
        right: wp('10%'),
        top: hp('1%')
    },
    labelStyles: {
        flexDirection: 'row',
 },
    couponsStyles: {
        top: hp('2.2%'),
        left: wp('10.2%')
    },
    CouponsText: {
        color: '#fff',
        fontSize: hp('2%'),
        letterSpacing: 0.36,
        fontWeight: '700',
        width: wp('50%'),
        left:wp('6%')
    },
    GalleryStyles: {
        backgroundColor: '#292930',
        top: hp('4.35%')
    },
    ImageContainer: {
        margin: wp('2.6%')
    },
    termStyle: {
        backgroundColor: '#292930',
        top: hp('5.5%')
    },
    TermContainer: {
        backgroundColor: '#292930',

        flexDirection: 'row',
        padding: wp('1%'),
        alignItems: 'center'
    },
  
    textStyles: {
        fontSize: hp('2%'),
        color: '#CDCDCD',
        left: wp('4%')
    },
    Icon:{
        left:wp('3%')
    },
    imageStyles:{ 
        width: 327,
         height: 104, 
         borderRadius: 12 
    }

})

export default styles