import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import { Card } from 'react-native-shadow-cards'
import Inputbox from '../../components/Inputbox'
import styles from '../../styles/FormsStyles/stylesSocialScreen'

const SocialScreen = ({ navigation }) => {

    const [edit, setEdit] = useState(false)

    const onEdit = () => {
        setEdit(true)
    }

    return (

        <View style={styles.Container}>
            <View style={styles.Header}>
                <TouchableOpacity onPress={() => { navigation.navigate('ProfileScreen') }}  >
                    <Image source={require('../../assets/Image/back.png')} style={styles.headerImage} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.headerText}>Social </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.edit} onPress={onEdit} >
                    <Image source={require('../../assets/Form/edit.png')} style={{ width: 22, height: 21 }} />
                </TouchableOpacity>

            </View>
            <View style={styles.textBox}>


                <View style={styles.textContainer}>
                    <View style={styles.icons}>
                        <Image source={require('../../assets/social/facebook.png')} style={styles.iconWidth} />
                        <Text style={styles.textHeading}>Facebook</Text>
                    </View>

                    <Card style={styles.Cards}>
                        <Inputbox
                            Title="Facebook Page"
                            edit={edit}
                        />
                    </Card>
                </View>
                <View style={styles.textContainerTwo}>
                    <View style={styles.icons}>
                        <Image source={require('../../assets/social/instagram.png')} style={styles.iconWidth} />
                        <Text style={styles.textHeading}>Instagram</Text>
                    </View>

                    <Card style={styles.Cards}>

                        <Inputbox
                            Title="Instagram Page"
                            edit={edit}
                        />
                    </Card>
                </View>
                <View style={styles.textContainerTwo}>
                    <View style={styles.icons}>
                        <Image source={require('../../assets/social/twitter.png')} style={styles.iconWidth} />
                        <Text style={styles.textHeading}>Twitter</Text>
                    </View>

                    <Card style={styles.Cards}>

                        <Inputbox
                            Title="Twitter Page"
                            edit={edit}
                        />
                    </Card>
                </View>
                <View style={styles.textContainerTwo}>
                    <View style={styles.icons}>
                        <Image source={require('../../assets/social/youtube.png')} style={styles.iconWidth} />
                        <Text style={styles.textHeading}>YouTube</Text>
                    </View>

                    <Card style={styles.Cards}>

                        <Inputbox
                            Title="YouTube Page"
                            edit={edit}
                        />
                    </Card>
                </View>
                <View style={styles.textContainerTwo}>
                    <View style={styles.icons}>
                        <Image source={require('../../assets/social/Website.png')} style={styles.iconWidth} />
                        <Text style={styles.textHeading}>Website</Text>
                    </View>

                    <Card style={styles.Cards}>

                        <Inputbox
                            Title="Web Page"
                            edit={edit}
                        />
                    </Card>
                </View>
            </View>
        </View>
    )
}

export default SocialScreen

