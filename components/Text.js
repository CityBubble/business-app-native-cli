import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const TextComponent = (props) => {
    return (
        <View style={styles.textContainer} >

            <View style={styles.cards}>
                <Text style={styles.textMain}>{props.textMain}</Text>
            </View>
        </View>
    )
}

export default TextComponent

const styles = StyleSheet.create({

    cards: {
        padding: 12,
        borderRadius: 15,
justifyContent:'center'
    },
    textMain: {
        color: '#fff',
        fontSize:hp('2%')
    }
})
