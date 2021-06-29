import { StyleSheet } from 'react-native'
const Registerstyles = StyleSheet.create({
    registerScreen: {
        flex: 1,
        backgroundColor: '#14161D'

    },
    registerContainer: {
        alignItems: 'center'
    }
    ,
    registerText: {
        color: '#fff',
        fontSize: 27,
        padding: 10,
        fontWeight: '700'
    }
    ,
    registerTextSecondary: {
        color: '#A5A5A5',
        paddingLeft: 10,
        fontSize: 16
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,


    },
    inputContainerSecondary: {
        justifyContent: 'center',

        marginTop: 25
    }
    ,
    Cards: {
        backgroundColor: '#000',
        borderRadius: 12,

    },
    registerTextContainer: {
        marginTop: 10,
        padding: 12
    },
    registerLabel: {
        left: 19,
        marginBottom: 10,
        color: '#fff',
        fontSize: 16,
        letterSpacing: 0.5,
        fontWeight: '600',
    },
    registerTextImage: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 10
    },


    registerLogo: {
        alignItems: 'center'
    },
    Icon: {
        width: 25,
        height: 25
    }


})







export default Registerstyles