import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    DashboardScreen_container: {
        backgroundColor: '#14161d',
        flex: 1,

    },
    DashboardScreen_Image: {
        alignItems: 'center',
        top: 91,
        opacity: 1
    },
    DashboardScreen_input: {
        top: 80,
        alignItems: 'center',
    },

    TextHeading: {
        fontSize: 25,
        fontWeight: '700',
        color: '#fff',
        letterSpacing: 0.75,
        padding: 12,
        textAlign:'center'
    },
    TextParagarph: {
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
    SvgIcon:{
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
    ImageContainer:{
        top:50
    },
    PlansButton:{
        top:89
    }


})



export default styles