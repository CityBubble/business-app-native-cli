import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import TextComponent from '../../components/Text'
import { Card } from 'react-native-shadow-cards'
import styles from '../../styles/FormsStyles/styleBasicInfo'


const BasicInfoScreen = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <TouchableOpacity onPress={() => { navigation.navigate('ProfileScreen') }} >
                    <Image source={require('../../assets/Image/back.png')} style={styles.headerImage} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.headerText}>Basic Info</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textBox}>
                <View style={styles.textContainer}>
                    <Text style={styles.textHeading}>Business name</Text>
                    <Card style={styles.Cards}>
                        <TextComponent />
                    </Card>
                </View>
                <View style={styles.textContainerBusiness}>
                    <Text style={styles.textHeading}>Category of business</Text>
                    <Card style={styles.Cards}><TextComponent /> </Card>
                </View>
            </View>
        </View>
    )
}

export default BasicInfoScreen

