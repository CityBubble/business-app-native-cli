import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container_profile: {
        flex: 1,
        backgroundColor: '#14161d'
    },
    header_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        top:10

    },
    Hamburger: {
        top: 10,
        right: 30
    },

    Header_image: {
        left: 20,
        top: 10
    },
    profile_picture: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 40
    },
    Upload_profile: {

        alignItems: 'center',
        borderRadius: 100,
        padding: 8,
        bottom: 40,
        left: 70,
        width: 30,
        backgroundColor: '#707070'
    },
    BussinessName: {
        color: "#fff",
        letterSpacing: 0.7,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        bottom:10
    },
    social_media: {
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
    AccountInformation: {
        top: 70,
        left: 33
    },
    AccountInformationHeading: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '700',
        letterSpacing: 0.48,

    },
    AccountInformationBox: {
        flexDirection: 'row',
        alignItems: 'center',
        top: 19,
        backgroundColor: '#20202A',
        width: 315,
        padding: 12,
        borderRadius: 15,
        height: 43,


    },
    InfoWrap: {
        paddingVertical: 12
    }

})





export default styles