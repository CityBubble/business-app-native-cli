import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14161D'
    },
    otpStyle: {
        flex: 1,
        padding: 10
    },
    otpHeading: {
        color: '#fff',
        marginTop: 50,
        marginHorizontal: 30,
        fontSize: 27,
        fontWeight: '700'
    },
    otpText: {
        marginTop: 10,
        marginHorizontal: 17,
        color: '#ADADAD',
        fontSize: 16,
        letterSpacing: 1
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80
    },
    cellView: {
        paddingVertical: 13,
        width: 45,
        height: 53,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#fff'
    },
    cellViewWrongOtp: {
        paddingVertical: 13,
        width: 45,
        height: 53,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#E50027'
    },
    cellText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#fff'
    },
    OtpTextChange: {
        color: '#fff',
        textAlign: 'center',
        padding: 12,
        marginTop: 10,
        fontSize: 14
    },
    otpBack: {
        marginLeft: 40,
        top: 20
    },
    textNumber: {
        color: '#4852ff',
        left: 118,
        padding: 12,
        fontSize: 15,
        bottom: 30
    },  
    otpHeading: {
        color: '#fff',
        marginTop: 50,
        marginHorizontal: 15,
        fontSize: 27,
        fontWeight:'700'
    },
    icons:{
        left:155,
        top:46
    }


})




export default styles