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
  
    
    
})

export default styles