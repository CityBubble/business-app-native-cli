import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    stopModalBackground:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stopModalAlert:{
        width: wp('80%'),
        height: hp('30%'),
        backgroundColor: '#262626',
        paddingHorizontal: wp('2%'),
        paddingVertical: hp('2%'),
        borderRadius: 20,
        elevation: 20
    },
    stopModalText:{
        top:hp('2%'),
        alignItems:'center'
    },
     stopModalButton:{
         top:hp('2%'),
         flexDirection:'row',
         justifyContent:'space-around',
         padding:wp('2%')
     },
     btnNo:{
         backgroundColor:'#EC8B40',
         padding:wp('2%'),
         width:wp('20%'),
         height:hp('5%'),
         alignItems:'center',
         borderRadius:12
     },
     btnYes:{
         backgroundColor:'transparent',
         padding:wp('2%'),
         width:wp('20%'),
         height:hp('5%'),
         alignItems:'center',
         borderRadius:12,
         borderWidth:1,
         borderColor:'#fff'
     },
     stopBtnNo:{
         color:'#fff',
         fontSize:hp('2%'),
         bottom:1,
         fontWeight:'700'
    },
     stopBtnYes:{
         color:'#fff',
         fontSize:hp('2%'),
         bottom:1
    },
    stopModalHeading:{
        fontSize:hp('2.5%'),
        color:'#fff',
        fontWeight:'800'
    },
    stopModalPara:{
        fontSize:hp('2.2%'),
        color:'#fff',
        textAlign:'center',
        padding:wp('2%')
    }
    

})

export default styles