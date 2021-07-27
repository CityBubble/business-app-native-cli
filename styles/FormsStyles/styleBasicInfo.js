import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#14161d'
    },
    Header: {
        flexDirection: 'row',
        alignItems: 'center',
        top: hp('2%')

    },
    headerImage: {
        left: wp('4%'),
    },
    headerText: {
        color: '#fff',
        fontSize: hp('2.5%'),
        left: wp('35%'),
        fontWeight: '700',
        letterSpacing: 0.8
    },
    textContainer: {
        top: hp('15%'),
        left: wp('7%'),

    },
    textContainerBusiness: {
        top: hp('22%'),
        left: wp('7%'),
    },

    Cards: {
        backgroundColor: '#000',
        borderRadius: 18,
        width: wp('80%'),
        height: hp('7%'),

    },
    textHeading: {
        color: '#fff',
        fontWeight: '600',
        letterSpacing: 0.24,
        bottom: hp('2%'),
        fontSize: hp('2%'),
        left: wp('8%'),

    },
    textBox: {
        justifyContent: 'center',
        bottom: hp('4%')
    }
})

export default styles