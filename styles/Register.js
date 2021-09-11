import { StyleSheet, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Registerstyles = StyleSheet.create({
     registerScreen: {
        flex: 1,
        backgroundColor: '#14161D'

    },
    registerContainer: {
        alignItems: 'center'
    }
    ,
    registerText: {
        color: '#fff',
        fontSize: Platform.OS === 'ios' ? hp('3%') : hp('4.1%'),
        padding: hp('1.3%'),
        fontWeight: '700',
    }
   ,
    registerTextSecondary: {
        color: '#A5A5A5',
        paddingLeft: wp('2.2%'),
        fontSize: wp('3.5%')
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('1.5%'),
    },
    inputContainerSecondary: {
        justifyContent: 'center',
        marginTop: hp('4.2%'),
        
    }
    ,
    Cards: {
        backgroundColor: '#000',
        borderRadius: 12,
 },

    registerTextContainer: {
        marginTop: hp('0.2%'),
        padding: wp('0%'),
        marginRight: wp('10%'),
    },

    dropDownPickerStyle:{
        marginRight: wp('10%'),

    },

    registerLabel: {
        left: wp('2.9%'),
        marginBottom: hp('1.3%'),
        color: '#fff',
        fontSize: wp('4%'),
        letterSpacing: 0.5,
        fontWeight: '600',
        
        
        
    },
    registerTextImage: {
        flexDirection: 'row',
        alignItems: 'center',
        left: wp('2%'),
        
    },

    registerDropDown: {
        zIndex : 2000
    },


    registerLogo: {
        alignItems: 'center',
    },
    Icon: {
        width:Platform.OS==='ios'?wp('6.9%'):wp('7.4%'),
        height: Platform.OS === 'ios' ? hp('3.4%') : hp('4.2%'),
    },

    registerButton:{
        marginLeft:200,
        
    },

    bigViewContainer:{
        marginLeft: hp('5%'),
    },

    nextButtonSection: {
        justifyContent: 'center',
        alignItems: 'center'
     }


  


})







export default Registerstyles