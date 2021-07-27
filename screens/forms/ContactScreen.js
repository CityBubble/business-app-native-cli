import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image,TextInput } from 'react-native'
import TextComponent from '../../components/Text'
import { Card } from 'react-native-shadow-cards'
import styles from '../../styles/FormsStyles/stylesContactScreen'


const ContactScreen = ({ navigation }) => {
    const [edit, setEdit] = useState(false)
    const[SecondaryPh,setSecondaryPh]=useState()

    const onEdit = () => {
        setEdit(true)
    }
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <TouchableOpacity onPress={() => { navigation.navigate('ProfileScreen') }} >
                    <Image source={require('../../assets/Image/back.png')} style={styles.headerImage} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.headerText}>Contact</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.edit} onPress={onEdit} >
                    <Image source={require('../../assets/Form/edit.png')} style={{ width: 22, height: 21 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.textBox}>
                <View style={styles.textContainer}>
                    <Text style={styles.textHeading}>Primary contact</Text>
                    <Card style={styles.Cards}>
                        <TextComponent />
                    </Card>
                </View>
                <View style={styles.textContainerContact}>
                    <Text style={styles.textHeading}>Secondary contact</Text>
                    <Card style={styles.Cards}>
                        <TextInput
                            placeholder="Enter 10-digit number"
                            style={styles.Input}
                            placeholderTextColor="#A5A5A5"
                            keyboardType='number-pad'
                            value={SecondaryPh}
                            onChangeText={(text)=>{setSecondaryPh(text)}}
                               />
                    </Card>
                </View>
            </View>
        </View>
    )
}

export default ContactScreen

