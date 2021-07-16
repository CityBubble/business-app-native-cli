import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const Checkboxstyles = StyleSheet.create({
    checkboxBase:{
        width:wp('5%'),
        height:hp('2.5%'),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        borderColor:'#fff',
        borderWidth:2,
        top:hp('1%')
     
    },
    checkboxChecked:{
        backgroundColor:'#fff',
    }    
})



export default Checkboxstyles