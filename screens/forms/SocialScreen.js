
import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

import { Card } from 'react-native-shadow-cards'
import Inputbox from '../../components/Inputbox'
import styles from '../../styles/FormsStyles/stylesSocialScreen'

const SocialScreen = ({ navigation }) => {

    const [edit, setEdit] = useState(false)
    const [Flink, setFlink] = useState('')
    const [Ilink, setIlink] = useState('')
    const [Tlink, setTlink] = useState('')
    const [Ylink, setYlink] = useState('')
    const [Wlink, setWlink] = useState('')

    const onEdit = () => {
        setEdit(true)
    }
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 50 : 0
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
            <KeyboardAvoidingView enabled behavior='padding' keyboardVerticalOffset={keyboardVerticalOffset} style={styles.textInput}>
                <ScrollView style={{ flex: 1 }} bounces={false} vertical>
                    <View style={styles.textBox}>
                        <View style={styles.textContainer}>
                            <View style={styles.icons}>
                                <Image source={require('../../assets/social/facebook.png')} style={styles.iconWidth} />
                                <Text style={styles.textHeading}>Facebook</Text>
                            </View>

                            <Card style={styles.Cards}>
                                <TextInput
                                    placeholder="Facebook Page"
                                    placeholderTextColor="#fff"
                                    value={Flink}
                                    onChangeText={(text) => { setFlink(text) }}
                                    editable={edit}
                                    style={styles.Input}
                                />

                            </Card>
                        </View>

                        <View style={styles.icons}>
                            <Image source={require('../../assets/social/instagram.png')} style={styles.iconWidth} />
                            <Text style={styles.textHeading}>Instagram</Text>
                        </View>

                        <Card style={styles.Cards}>

                            <TextInput
                                placeholder="Instagram Page"
                                placeholderTextColor="#fff"
                                value={Ilink}
                                onChangeText={(text) => { setIlink(text) }}
                                editable={edit}
                                style={styles.Input}
                            />
                        </Card>
                        <View style={styles.icons}>
                            <Image source={require('../../assets/social/twitter.png')} style={styles.iconWidth} />
                            <Text style={styles.textHeading}>Twitter</Text>
                        </View>
                        <Card style={styles.Cards}>
                            <TextInput
                                placeholder="Twitter Page"
                                placeholderTextColor="#fff"
                                value={Tlink}
                                onChangeText={(text) => { setTlink(text) }}
                                editable={edit}
                                style={styles.Input}
                            />
                        </Card>
                        <View style={styles.icons}>
                            <Image source={require('../../assets/social/youtube.png')} style={styles.iconWidth} />
                            <Text style={styles.textHeading}>YouTube</Text>
                        </View>

                        <Card style={styles.Cards}>
                            <TextInput
                                placeholder="YouTube Page"
                                placeholderTextColor="#fff"
                                value={Ylink}
                                onChangeText={(text) => { setYlink(text) }}
                                editable={edit}
                                style={styles.Input}
                            />
                        </Card>

                        <View style={styles.icons}>
                            <Image source={require('../../assets/social/Website.png')} style={styles.iconWidth} />
                            <Text style={styles.textHeading}>Website</Text>
                        </View>
                        <Card style={styles.Cards}>
                            <TextInput
                                placeholder="Web Page"
                                placeholderTextColor="#fff"
                                value={Wlink}
                                onChangeText={(text) => { setWlink(text) }}
                                editable={edit}
                                style={styles.Input}
                            />
                        </Card>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

export default SocialScreen

