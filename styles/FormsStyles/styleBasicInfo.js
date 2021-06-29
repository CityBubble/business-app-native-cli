import react from 'react'
import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#14161d'
    },


    Header: {
        flexDirection: 'row',
        alignItems: 'center',
        top: 20

    },
    headerImage: {
        left: 20,

    }
    ,
    headerText: {
        color: '#fff',
        fontSize: 20,
        left: 128,
        fontWeight: '700',
        letterSpacing: 0.8
    }
    ,

    textContainer: {
        top: 132,
        left: 32,

    },
textContainerTwo:{
    top: 176,
    left: 32,
},

    Cards: {
        backgroundColor: '#000',
        borderRadius: 18,
        width: 311,
        top: 10,
        height:52
    },
    textHeading: {
        color: '#fff',
        fontWeight: '600',
        letterSpacing: 0.24,
        fontSize: 15,
        left:10,
        bottom:5
    },
    textBox:{
        justifyContent:'center',
        bottom:45
    }
})

export default styles