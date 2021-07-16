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
        left: wp('2%'),
    }
    ,
    headerText: {
        color: '#fff',
        fontSize: hp('2.5%'),
        left: wp('35%'),
        fontWeight: '700',
        letterSpacing: 0.8
    },
    Cards: {
        backgroundColor: '#000',
        borderRadius: 18,
        width: wp('90%'),
        height: hp('7%'),
        margin: hp('3%'),

    },
    textHeading: {
        color: '#fff',
        fontWeight: '600',
        letterSpacing: 0.24,
        fontSize: hp('2%'),
        left: wp('8%'),
        top: hp('1%')
    },
    textBox: {
        top: hp('7%')

    }

})

export default styles