import {StyleSheet} from 'react-native'



const styles = StyleSheet.create({

    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: 310,
        height: 540,
        backgroundColor: '#262626',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 20,
        elevation: 20
    },
    accountInfo: {
        alignItems: 'center',
        
    },
    accountText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: '700',
        letterSpacing: 0.48,
        top: 13
    },
    underlineText: {
        backgroundColor: '#48494d',
        height: 1,
        width: 309,

    },
    underline: {
        top: 32
    },
    underlineList: {
        top: 52,
       
    },
    underlineLogout: {
        top:12,
        left: 2
    },
    accountList: {
        paddingHorizontal: 12,
        bottom:12
    }
    , list: {
        top: 53,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center'

    },
    account: {
        backgroundColor: '#4852FF',
        borderWidth: 1,
       
    },
    listText: {
        fontSize: 18,
        left: 20,
        color: '#fff'
    },
    logoutAccount: {
        top: 67,
        alignItems: 'center',
        letterSpacing: 0.39
    },
    logoutText: {
        color: '#fff',
        fontSize: 20,
        letterSpacing: 0.39,
        textAlign:'center'
    },
    footer: {
        top: 120,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    footerText: {
        color: '#dcdce1',
        letterSpacing: 0.3,
        fontSize: 14,
        fontWeight: '300'
    },
    footerDot: {
        fontWeight: "900",
        color: '#fff'
    },
    backAccount:{
        top:90,
        alignItems:'center',
    }
})


export default styles