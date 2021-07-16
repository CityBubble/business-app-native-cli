import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    DescriptionContainer: {
        flex: 1,
        backgroundColor: '#14161d'
    },
    image:{
         height: hp('35%'),
          width:wp('100%'),
          },
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: hp('37%'),
        backgroundColor: 'rgba(0,0,0,0.4)',
        bottom:hp('35%')
    },
    offer: {
        flexDirection: 'row',
        alignItems: 'center',
        left: wp('20%'),
        bottom: hp('13%')

    },
    BackIcon: {
        left: wp('3%'),
        padding: wp('1%'),
        backgroundColor: '#fff',
        borderRadius: 50,
        bottom: hp('15%')
    },
    textWhite: {
        color: '#fff',
        fontSize: hp('4%'),
        fontWeight: 'bold'
    },
    textGreen: {
        color: '#0BB739',
        fontSize: hp('6%'),
        fontWeight: 'bold'
    },
    DiscriptionCard: {
         bottom: hp('50%'),
        alignItems: 'center'
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#A5A5A5',
        backgroundColor: '#4852ff',
        height: hp('7%'),

    },
    StopBtn: {
        alignItems: 'center',
        padding: wp('1%'),
        borderLeftWidth: 1,
        borderLeftColor: '#A5A5A5',
        width: wp('50%'),
        height:hp('10%')
    },
    refreshBtn: {
        alignItems: 'center',
        width: wp('50%'),
        padding: wp('1%'),
        height:hp('10%')

    },
    stopText: {
        fontSize: hp('2.5%'),
        padding: wp('2%'),
        color: '#fff',
        fontWeight: '700',
        

    },
    refreshText: {
        fontSize: hp('2.5%'),
        padding: wp('2%'),
        color: '#fff',
        fontWeight: '700',
        }

})

export default styles