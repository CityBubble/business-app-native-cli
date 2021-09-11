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
        fontWeight:'500',
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
       backgroundColor:'#14161d',
       width:wp('68%'),
       height:hp('7%'),
       borderRadius:10,

       shadowColor: "#fff",
       shadowOffset: {
	        width: 50,
	        height: 100,
    },
        shadowOpacity: 1.0,
        shadowRadius: 50,
        elevation: 50,
   },
   openDialogView:{
       borderTopLeftRadius:10,
       borderBottomLeftRadius:10,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
      height:hp('7%'),
       padding:wp('2%'),
       right:hp('1%'),
       backgroundColor:'#A5A5A5',
   },
   phoneInputStyle:{
       color: '#fff',
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