import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Image } from 'react-native'
import styles from '../styles/componentStyles/Header'

class Header extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={this.props.onPress} >
                    <Image source={require('../assets/Image/back.png')} style={styles.headerImage} />
                </TouchableOpacity>
                <Image source={require('../assets/Logo/Logo.png')} style={styles.logo} />
            </View>
        )
    }
}

export default Header

