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
        height: hp('7.0%'),
        justifyContent: 'space-between',
        alignItems: 'center'
},
    state: {
        color: '#05EC41',
        fontSize: hp('2.2%'),
        fontWeight: '500',
        letterSpacing: 0.5
    },
    
    Calender: {
        flexDirection: 'row',
        alignItems: 'center',
        top:hp('1%')
        
        
    },
    CalenderTicket: {
        flexDirection: 'row',
        alignItems: 'center',
        

    },
    Validity: {
        flexDirection: 'column',
       textAlign:'left',
       bottom:hp('0.5%')
        },

    Date: {
        color: '#fff',
        fontSize: hp('1.9%'),
        top:hp('1%')
    },
    ticket: {
        color: '#fff',
        fontSize: hp('2%'),
        // fontWeight: '500',
        letterSpacing: 0.5
    },
    Views: {
        color: '#fff',
        fontSize: hp('2%'),
        // fontWeight: '500',
        letterSpacing: 0.5
    },
    secondHalf:{
        bottom:hp('0.5%')
    },
    Icon:{
        right:wp('1.2%')
    }
    
})
export default styles