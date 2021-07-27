
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
    }
    ,
    headerText: {
        color: '#fff',
        fontSize: hp('2.5%'),
        left: wp('35%'),
        fontWeight: '700',
        letterSpacing: 0.8
    }
    ,

    textContainer: {
        top: hp('15%'),
        left: wp('10%'),
    },
    textContainerContact: {
        top: hp('22%'),
        left: wp('10%'),
    },

    Cards: {
        backgroundColor: '#000',
        borderRadius: 18,
        width: wp('80%'),
        height: hp('7%'),
        top: hp('2%')
    },
    textHeading: {
        color: '#fff',
        fontWeight: '600',
        letterSpacing: 0.24,
        fontSize: hp('2%'),
        left: wp('6%'),
    },
    textBox: {
        justifyContent: 'center',
        bottom: hp('7%')
    },
    edit: {
        left: wp('65%')
    },
    Input: {
        color: '#fff',
        padding: 12,
        fontSize: 16,
    },
})

export default styles