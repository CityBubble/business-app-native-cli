import { StyleSheet,Platform } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    cardStyle: {
        width: wp('92%'),
        left: wp('5%'),
        marginTop: hp('2%'),
        borderRadius:21
    },
    cardAdd: {
        backgroundColor: '#292930',
        height: hp('12.6%'),
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    state: {
        color: '#05EC41',
        margin: wp('2%'),
        fontSize: hp('2.4%'),
        fontWeight: '500',
        letterSpacing: 0.5
    },

    Calender: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: wp('3%'),
        bottom:hp('2%')

    },
    CalenderTicket: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: wp('3%')

    },
    Validity: {
        flexDirection: 'column',
        },

    Date: {
        color: '#fff',
        left: wp('0.1%'),
        fontSize: hp('2.4%')
    },
    ticket: {
        color: '#fff',
        left: wp('2%'),
        fontSize: hp('2.4%'),
        fontWeight: '500',
        letterSpacing: 0.5
    },
    Views: {
        color: '#fff',
        left: wp('2%'),
        fontSize: hp('2.4%'),
        fontWeight: '500',
        letterSpacing: 0.5
    },

})
export default styles