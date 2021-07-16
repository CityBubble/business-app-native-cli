import {StyleSheet} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({

    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: wp('80%'),
        height: hp('60%'),
        backgroundColor: '#262626',
        paddingHorizontal: hp('2%'),
        paddingVertical: wp('2%'),
        borderRadius: 20,
        elevation: 20
    },
    accountInfo: {
        alignItems: 'center',
        
    },
    accountText: {
        fontSize: hp('2.5%'),
        color: "#fff",
        fontWeight: '700',
        letterSpacing: 0.48,
        top: hp('1%')
    },
    underlineText: {
        backgroundColor: '#48494d',
        height: hp('0.2%'),
        width: wp('80'),
},
    underline: {
        top: hp('2.5%')
    },
    underlineList: {
        top: hp('2%'),
     right:wp('3.3%')
       
    },
    underlineLogout: {
        top:hp('1%'),
    },
    accountList: {
        paddingHorizontal: wp('8%'),
        bottom:hp('4%')
    }
    , list: {
        top: hp('5.8%'),
        marginVertical: wp('1.5%'),
        flexDirection: 'row',
        alignItems: 'center'
},
    account: {
        backgroundColor: '#4852FF',
        borderWidth: 1,
       
    },
    listText: {
        fontSize: hp('2.3%'),
        left: wp('3%'),
        color: '#fff'
    },
    logoutAccount: {
        top: hp('4%'),
        alignItems: 'center',
        letterSpacing: 0.39
    },
    logoutText: {
        color: '#fff',
        fontSize: hp('2.5%'),
        letterSpacing: 0.39,
        textAlign:'center'
    },
    footer: {
        top: hp('7%'),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    footerText: {
        color: '#dcdce1',
        letterSpacing: 0.3,
        fontSize: hp('2.2%'),
        fontWeight: '300'
    },
    footerDot: {
        fontWeight: "900",
        color: '#fff'
    },
    backAccount:{
        top:hp('6%'),
        alignItems:'center',
    },
    ImageStyles:{ 
        width: wp('10%'), 
        height: hp('4%') 
    }
})


export default styles