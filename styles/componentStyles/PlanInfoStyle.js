import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({

    ImageContainer: {
        alignItems: 'center',
    },


    TextPlans: {
        top: hp('2%'),
        left: wp('5%')
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
        right: wp('2%')

    },
    TextInfo: {
        color: '#fff',
        left: wp('3%'),
        textAlign: 'left'
    },

    ButtonText: {
        color: '#fff',
        fontWeight: '700',
        right: wp('2%')

    },
    Button: {
        padding: wp('2%')
    },
    arrow: {
        left: wp('3%')
    }


})








export default styles