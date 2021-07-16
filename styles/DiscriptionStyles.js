import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    DescriptionsContainer: {
        flex: 1,
        backgroundColor: '#14161d'
    },
    Background: {
        backgroundColor: '#ECC710',
        height: hp('25%')
    },
    offer: {
        flexDirection: 'row',
        alignItems: 'center',
        left: wp('25%'),
    },
    BackIcon: {
        width: wp('9%'),
        padding: wp('1.2%'),
        backgroundColor: '#fff',
        borderRadius: 50,
        left: wp('2.2%'),
        top: hp('2%')
    },
    textWhite: {
        color: '#fff',
        fontSize: hp('5%'),
        fontWeight: 'bold'
    },
    textGreen: {
        color: '#0BB739',
        fontSize: hp('6%'),
        fontWeight: 'bold'
    },
    DiscriptionCard: {
        bottom: hp('2%'),
        alignItems: 'center'
    },
})

export default styles