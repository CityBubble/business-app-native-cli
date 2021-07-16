import React from 'react'
import { Modal } from 'react-native'
import { Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import styles from '../styles/componentStyles/AccountList'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const AccountList = (props) => {
    return (
        <Modal transparent visible={props.visible}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.accountInfo}>
                        <Avatar
                            rounded
                            source={{
                                uri: props.uri
                            }}
                            size={hp('10%')}
                        />
                        <Text style={styles.accountText}>{props.Text}</Text>
                        <View style={styles.underline}>
                            <Text style={styles.underlineText}></Text>
                        </View>
                    </View>
                    <View style={styles.accountList}>
                        <TouchableOpacity style={styles.list}>
                            <Avatar
                                rounded
                                title="T"
                                containerStyle={styles.account}
                                size={hp('5%')}
                            />
                            <Text style={styles.listText}>Tosib Foods</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.list}>
                            <Avatar
                                rounded
                                title="K"
                                containerStyle={styles.account}
                                size={hp('5%')}
                            />
                            <Text style={styles.listText}>King's Bakery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.list}>
                            <Avatar
                                rounded
                                title="B"
                                containerStyle={styles.account}
                                size={hp('5%')}
                            />
                            <Text style={styles.listText}>Boss Gym</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.list}>
                            <Image source={require('../assets/profile.png')} style={styles.ImageStyles} />
                            <Text style={styles.listText}>Add new account</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.underlineList}>
                        <Text style={styles.underlineText}></Text>
                    </View>
                    <View style={styles.logoutAccount}>
                        <TouchableOpacity onPress={props.navigate}>
                            <Text style={styles.logoutText}>Logout</Text>
                        </TouchableOpacity>
                        <View style={styles.underlineLogout}>
                            <Text style={styles.underlineText}></Text>
                        </View>
                    </View>
                    <View style={styles.backAccount}>
                        <TouchableOpacity onPress={props.close}>
                            <Text style={styles.logoutText}>Dismiss</Text>
                            <View style={styles.underlineLogout}>
                                <Text style={styles.underlineText}></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Privacy Policy</Text>
                        <Text style={styles.footerDot} >.</Text>
                        <Text style={styles.footerText}>Terms of Service</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AccountList

