import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const TextComponent = (props) => {
    return (
        <View style={styles.textContainer} >
           
            <View style={styles.cards}>
                <Text style={styles.textMain}></Text>
            </View>
        </View>
    )
}

export default TextComponent

const styles = StyleSheet.create({
    
    cards:{


padding:12,
borderRadius:15

    },
textMain:{
    color:'#fff'
}
})
