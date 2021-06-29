import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import TextComponent from '../../components/Text'
import { Card } from 'react-native-shadow-cards'
import InputBox from '../../components/Inputbox'
import styles from '../../styles/FormsStyles/stylesContactScreen'


const ContactScreen = ({ navigation }) => {
    const [edit, setEdit] = useState(false)

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

                        <TextComponent


                        />
                    </Card>
                </View>
                <View style={styles.textContainerTwo}>
                    <Text style={styles.textHeading}>Secondary contact</Text>

                    <Card style={styles.Cards}>
                        <InputBox
                            Title="Enter 10-digit number"
                            keybord='numeric'
                            edit={edit}

                        />

                    </Card>
                </View>
            </View>
        </View>
    )
}

export default ContactScreen

