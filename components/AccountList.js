import React from 'react'
import { Modal } from 'react-native'
import { Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import styles from '../styles/componentStyles/AccountList'

const AccountList = (props) => {
    return (
        <Modal transparent visible={props.visible}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.AccountInfo}>
                        <Avatar
                            rounded
                            source={{
                                uri: props.uri
                            }}
                            size={75}
                        />
                        <Text style={styles.AccountText}>{props.Text}</Text>
                        <View style={styles.underline}>
                            <Text style={styles.underlineText}></Text>
                        </View>
                    </View>
                    <View style={styles.AccountList}>
                        <TouchableOpacity style={styles.list}>
                            <Avatar
                                rounded
                                title="T"
                                containerStyle={styles.account}
                                size={40}
                            />
                            <Text style={styles.ListText}>Tosib Foods</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.list}>
                            <Avatar
                                rounded
                                title="K"
                                containerStyle={styles.account}
                                size={40}
                            />
                            <Text style={styles.ListText}>King's Bakery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.list}>
                            <Avatar
                                rounded
                                title="B"
                                containerStyle={styles.account}
                                size={40}
                            />
                            <Text style={styles.ListText}>Boss Gym</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.list}>
                            <Image  source={require('../assets/profile.png')} style={{width:45 ,height:45}}/>
                            <Text style={styles.ListText}>Add new account</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.underline_list}>
                        <Text style={styles.underlineText}></Text>
                    </View>
                    <View style={styles.LogoutAccount}>
                        <TouchableOpacity onPress={props.navigate}>
                            <Text style={styles.LogoutText}>Logout</Text>
                        </TouchableOpacity>
                        <View style={styles.underline_logout}>
                            <Text style={styles.underlineText}></Text>
                        </View>
                    </View>
                    <View style={styles.BackAccount}>
                        <TouchableOpacity onPress={props.close}>
                            <Text style={styles.LogoutText}>Dismiss</Text>
                            <View style={styles.underline_logout}>
                            <Text style={styles.underlineText}></Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.FooterText}>Privacy Policy</Text>
                        <Text style={styles.FooterDot} >.</Text>
                        <Text style={styles.FooterText}>Terms of Service</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AccountList

