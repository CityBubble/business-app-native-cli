import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Image } from 'react-native'
import styles from '../styles/componentStyles/Header'

const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={props.onPress} >
                <Image source={require('../assets/Image/back.png')} style={styles.headerImage} />
            </TouchableOpacity>
            <Image source={require('../assets/Logo/Logo.png')} style={styles.logo} />
        </View>
    )
}

export default Header

