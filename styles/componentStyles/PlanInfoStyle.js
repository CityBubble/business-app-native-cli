import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({

    ImageContainer: {
        alignItems: 'center',
    },
    TextPlans: {
        top: hp('1%'),
        left: wp('5%'),
       
    },
    Heading: {
        color: '#fff',
        marginVertical: hp('1%'),
        fontSize: hp('2%'),
        fontWeight: '600'
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    TextInfo: {
        color: '#fff',
        left: wp('3%'),
        textAlign: 'left',
        fontSize:hp('2%')
    },

    ButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize:hp('1.8%')

    },
    arrow: {
        left: wp('3%')
    },
    aboveContainer:{
        bottom:hp('1.5%')
    }


})








export default styles