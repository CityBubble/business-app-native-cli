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



    Cards: {
        backgroundColor: '#000',
        borderRadius: 18,
        width: 341,
        height: 52,
        // top: 10,
        margin: 20
    },
    textHeading: {
        color: '#fff',
        fontWeight: '600',
        letterSpacing: 0.24,
        fontSize: 15,
        left: 30,

    },
    textBox: {

        top: 70,
        left: 5
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 12,
        top: 8
    },
    iconWidth: {
        width: 20,
        height: 20,
        left: 20
    },
    edit: {
        left: 250
    }

})

export default styles