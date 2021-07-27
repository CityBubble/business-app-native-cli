import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#14161D'
    }, 
    loginText:{
        marginTop:hp('7%'),
        marginHorizontal:wp('3.5%')
    },
    loginInput:{
        marginTop:hp('15%'),
        justifyContent:'center',
        alignItems:'center'
    },
    loginHeading:{
        color:"#fff",
        fontSize:hp('4%'),
        fontWeight:'800',
        padding:5
    },
    loginHeadingSecondary:{
        color:"#A5A5A5",
        fontSize:hp('2.2%'),
        marginLeft:wp('2.3%')
    },
    loginTextInput:{
        color:'#fff',
        padding:wp('3%'),
        fontSize:hp('2.1%'),
        fontWeight:'400'
   },
   inputContainer:{
       flexDirection:'row',
       alignItems:'center',
       padding:wp('1%'),
       backgroundColor:'#fff',
       width:wp('68%'),
       height:hp('7%'),
       borderRadius:6
   },
   openDialogView:{
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
      height:hp('6.8%'),
       padding:wp('2%'),
       right:hp('.4%'),
       backgroundColor:'#A5A5A5'
   },
   phoneInputStyle:{
       marginLeft:wp('2%'),
       flex:1,
       height:hp('7%'),
       fontSize:hp('2%87')
      },
   Code:{
       fontSize:hp('2%'),
       fontWeight:'700'
   },
   registerQuestion:{
       flexDirection:'row',
       padding:wp('4.5%'),
       alignItems:'center'
   },
   TextQuestion:{
       color:'#A5A5A5',
       fontSize:hp('2%'),
       fontWeight:'700'
    },
    btnStyles:{
       color:'#32CD30',
        fontSize:hp('2.1%'),
        fontWeight:'700'

   }
  
    
    
})

export default styles