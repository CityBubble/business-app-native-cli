import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    duesContainer: {
        flex: 1,
        backgroundColor: '#14161d'
    },
    dueTab: {
        flexDirection: 'row',
        alignItems: 'center',
        top: hp('8%'),
        justifyContent: 'space-evenly'
    },
    dueText: {
        color: '#fff',
        fontWeight: '800'
    },
    cardContainer: {
        top: hp('14%')
    },
    btnStyles: {
        top: hp('2%'),
        backgroundColor: '#4852ff',
        padding: wp('1.5%'),
        width: wp('30%'),
        alignItems: 'center',
        borderRadius: 15
    },
    DueContainer: {
        backgroundColor: '#292930',
        padding: wp('2%'),
        alignItems: 'center',
        height: hp('46.9%'),
        width: wp('94%'),
        left: wp('2%'),
        borderRadius: 12
    },
    DueSmallConatiner: {
        backgroundColor: '#292930',
        padding: wp('2%'),
        alignItems: 'center',
        height: hp('30%'),
        width: wp('92%'),
        left: wp('4%'),
        borderRadius: 12
    },
    HeadingDue: {
        color: '#fff',
        textAlign: 'center',
        bottom: hp('4%'),
        fontSize: hp('2.3%')
    },
    dueSetup: {
        top: hp('5%'),

    },
    dueCard: {
        flexDirection: 'row',
        marginTop: hp('4%'),
        bottom: hp('3%')
    },

})

  export default styles