import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    dashboardScreenContainer: {
        backgroundColor: '#14161d',
        flex: 1,

    },
    dashboardScreenImage: {
        alignItems: 'center',
        top: 91,
        opacity: 1
    },
    dashboardScreenInput: {
        top: 80,
        alignItems: 'center',
    },

    textHeading: {
        fontSize: 25,
        fontWeight: '700',
        color: '#fff',
        letterSpacing: 0.75,
        padding: 12,
        textAlign:'center'
    },
    textParagarph: {
        color: '#DDDDDD',
        fontSize: 15,
        letterSpacing: 0.36,
        textAlign: 'center',
        width: 300
    },
    Logo: {
        marginTop: 20,
        width: 47,
        height: 37,

    },
    svgIcon:{
        top:14
    }
    ,
    Underline:{
        backgroundColor:'#0818A8',
       width:65,
       height:6,
       textAlign:'center',
       left:3
    },
    imageContainer:{
        top:50
    },
    plansButton:{
        top:89
    }


})



export default styles