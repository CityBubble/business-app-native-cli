import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerProfile: {
        flex: 1,
        backgroundColor: '#14161d'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        top:10

    },
    Hamburger: {
        top: 10,
        right: 30
    },

    HeaderImage: {
        left: 20,
        top: 10
    },
    profilePicture: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 40
    },
    UploadProfile: {

        alignItems: 'center',
        borderRadius: 100,
        padding: 8,
        bottom: 40,
        left: 70,
        width: 30,
        backgroundColor: '#707070'
    },
    bussinessName: {
        color: "#fff",
        letterSpacing: 0.7,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        bottom:10
    },
    socialMedia: {
        flexDirection: 'row',
top:7
    },
    socialIcons: {
        padding: 12
    }, underline: {
        top: 52
    }, underlineText: {
        backgroundColor: '#2B2C2E',
        height: 2
    },
    accountInformation: {
        top: 70,
        left: 33
    },
    accountInformationHeading: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '700',
        letterSpacing: 0.48,

    },
    accountInformationBox: {
        flexDirection: 'row',
        alignItems: 'center',
        top: 19,
        backgroundColor: '#20202A',
        width: 315,
        padding: 12,
        borderRadius: 15,
        height: 43,


    },
    infoWrap: {
        paddingVertical: 12
    }

})





export default styles