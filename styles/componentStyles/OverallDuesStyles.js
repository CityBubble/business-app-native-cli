import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
   
    OverallContainer: {
        backgroundColor: '#292930',
        padding: wp('2%'),
        alignItems: 'center',
        height: hp('55%'),
        width: wp('92%'),
        left: wp('2%'),
        borderRadius: 12
    },
    duesDate: {
        fontSize: hp('2.5%'),
        color: '#fff'
    },
    dueUnderline: {
        backgroundColor: '#444444',
        height: hp('0.3%'),
        top: hp('2%')
    },
    ImageContainer:{
        flexDirection:'row',
        alignItems:'center',
        left:wp('3%')
    },
    GenratedText:{
        color:'#fff',
        fontSize:hp('3%'),
        right:wp('18%'),
        fontWeight:'800'
    },
    CircleContainer:{
        top:hp('3%'),
        alignItems:'center',
        justifyContent:'center'
    },
    CircleContainerTwo:{
        top:hp('6%'),
        alignItems:'center',
        justifyContent:'center'
    },
    GenratedHeading:{
        fontSize:hp('3%'),
        color:'#fff'
    },
    imageStyle:{
        width:wp('28%'),
        height:hp('15%')
    }
    


})

export default styles