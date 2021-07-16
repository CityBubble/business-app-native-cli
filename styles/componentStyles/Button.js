import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    registerBtn: {
        padding: hp('1.5%'),
        marginTop: hp('4%'),
        width: wp('60%'),
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: '#4852FF'
    },
    registerBtnText: {
        color: '#fff',
        fontSize: hp('2.5%'),
        fontWeight:'700'
    }
})


export default styles