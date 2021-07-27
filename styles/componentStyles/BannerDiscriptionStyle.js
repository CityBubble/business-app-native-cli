import { StyleSheet,Platform } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    bannerContainer: {
        padding: wp('2.5%'),
        marginTop: hp('3%'),
        left: wp('3%'),
        
    },
    offerText: {
        borderRadius: 20,
        fontWeight: '700',
        fontSize: hp('3.2%'),
        color: '#fff',
        textAlign: 'center'
    },
    statusContainer: {
        backgroundColor: '#292930',
        padding: wp('3%'),
        width: wp('92%'),
        right: wp('2%'),
        height:hp('6%'),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomEndRadius:6,
        borderBottomStartRadius:6
    },
  
    statusText: {
        color: '#fff',
        fontSize: hp('2%')
    },
    DateContainer: {
        alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: '#A5A5A5',
        width: wp('40%'),
        height:hp('6%'),
      },
    DateText: {
        color: '#fff',
        fontSize: hp('1.6%'),
    padding:wp('1%')
        
    },
    DateColor: {
        color: '#fff',
        letterSpacing: 0.7,
        fontSize: hp('1.9%'),
        fontWeight:'800'
    },
 

})
export default styles