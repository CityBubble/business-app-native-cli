import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    modalPickerContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    modal:{
        backgroundColor:'#fff',
        borderRadius:10
    },
    option:{
        alignItems:'flex-start'
    },
    text:{
        margin:hp('2%'),
        fontSize:hp('2.5%'),
        fontWeight:'bold'
    }    
})
    
export default styles