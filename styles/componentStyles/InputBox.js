import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    inputboxContainer: {
        width: 300,
        minHeight: 30,
        height: 50,
        
    },
    Input: {
        color: '#fff',
        padding: 12,
        fontSize: 16,
    },
    dropdown: {

        width: wp('78%'),
        borderWidth: 1,
        marginTop: hp('2%'),
        padding:wp('2%'),
        borderRadius:12,
        backgroundColor:'#000',
        bottom:hp('1%')
    },
    item: {
        paddingVertical: wp('2%'),
        paddingHorizontal:hp('2%'),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:hp('8%'),
        
  
    },
    textItem:{
        flex:1,
        color:'#000',
        fontSize:hp('2.2%')
    },
    shadow:{
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:1,
        },
        shadowOpacity:0.2,
        shadowRadius:1.41,
        elevation:2
    },
    selectedText:{
        color:'#fff',
        fontSize:hp('2%'),
    
    },
    placeholderStyle:{
        color:'#A5A5A5',
        fontSize:hp('2%')
    },

    

    


})

export default styles