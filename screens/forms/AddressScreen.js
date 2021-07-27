import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import TextComponent from '../../components/Text'
import { Card } from 'react-native-shadow-cards'
import styles from '../../styles/FormsStyles/styleAddressScreen'

const AddressScreen = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <TouchableOpacity onPress={() => { navigation.navigate('ProfileScreen') }} >
                    <Image source={require('../../assets/Image/back.png')} style={styles.headerImage} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.headerText}>Address</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textBox}>
                <View style={styles.textContainer}>
                    <Text style={styles.textHeading}>City</Text>
                    <Card style={styles.Cards}>
                        <TextComponent />
                    </Card>
                </View>
                <Text style={styles.textHeading}>Area</Text>

                <Card style={styles.Cards}>
                    <TextComponent />
                </Card>
                <Text style={styles.textHeading}>Pincode</Text>
                <Card style={styles.Cards}>
                    <TextComponent />
                </Card>
                <Text style={styles.textHeading}>Full address</Text>
                <Card style={styles.Cards}>
                    <TextComponent />
                </Card>

            </View>
        </View>
    )
}

export default AddressScreen

