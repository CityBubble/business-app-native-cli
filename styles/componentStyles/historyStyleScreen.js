import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    dateStyle: {
        flexDirection: 'row',
        padding: wp('2%'),
        marginTop: hp('3%'),
    },
    dotText: {
        color: '#4852ff',

    },
    dateText: {
        fontSize: hp('2%'),
        color: '#fff',
        paddingLeft: wp('3%'),
        fontWeight:'700'
    },
    cardStyle: {
        width: wp('92%'),
        left: wp('3%'),
        marginTop: hp('2%'),

    },
    cardAdd: {
        backgroundColor: '#292930',
        height: hp('11%'),
        alignItems: 'center',
    },

    Calender: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: wp('2%'),
        bottom: hp('1%')
    },
    CalenderViews: {
        flexDirection: 'row',
        alignItems: 'center',
       left:wp('39%'),
        bottom: hp('1%')

    },

    Date: {
        color: '#fff',
        left: wp('2%'),
        fontSize: hp('2%')
    },
    ticket: {
        color: '#fff',
        left: wp('2%'),
        fontSize: hp('2.2%')
    },
    Views: {
        color: '#fff',
        left: wp('2%'),
        fontSize: hp('2.2%'),
    },
    IconText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    stateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    statusText: {
        color: '#CFCFCF',
        fontSize: hp('2.2%'),
        paddingLeft: wp('2%')
    },
    DateContainer: {
        marginTop: hp('2%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    DateText: {
        color: '#CFCFCF',
        fontSize: hp('2.2'),
        paddingLeft: wp('2%')
    },
    DateColor: {
        color: '#fff',
        letterSpacing: 0.7,
        left: wp('22.5%'),
        fontSize: hp('2.2%')
    },
    statusColor: {
        color: '#fff',
        letterSpacing: 0.7,
        left: wp('22.5%'),
        fontSize: hp('2.2%')
    },
    secondHalf: {
        backgroundColor: '#292930',
        flexDirection: 'row',
        alignItems:'center'
       
        
    }
   
})
    
export default styles