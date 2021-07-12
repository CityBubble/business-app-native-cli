import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Avatar } from 'react-native-elements'
import ImagePicker from 'react-native-image-crop-picker';
import AccountInformation from '../components/AccountInformation'
import AccountList from '../components/AccountList'
import { TouchableWithoutFeedback } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from '../styles/Profile'
import ModalProfile from '../components/ModalProfile';
const Profile = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [show, setshow] = useState(false)
    const [Drop, setDrop] = useState(false)

    const pickImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setImage(image.path)
        });
    }

    return (
        <View style={styles.containerProfile} >
            <View style={styles.headerContainer}>

                <TouchableOpacity onPress={() => { navigation.navigate('Home') }} >
                    <Image source={require('../assets/Image/back.png')} style={styles.HeaderImage} />
                </TouchableOpacity>


                <TouchableOpacity style={styles.Hamburger} onPress={() => { setshow(true) }}>
                    <Image source={require('../assets/Form/Hamburger.png')} />
                </TouchableOpacity>
                <ModalProfile
                    visible={Drop}
                />

                <AccountList visible={show}
                    uri={image ? image : 'https://e7.pngegg.com/pngimages/981/645/png-clipart-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-thumbnail.png'}
                    Text="Farm Fresh"
                    close={() => setshow(false)}
                    navigate={() => { navigation.navigate('Login') }}

                />

            </View>

            <View style={styles.profilePicture}>
                <View style={styles.icon}>

                    <Avatar
                        rounded
                        source={{
                            uri: image ? image : 'https://e7.pngegg.com/pngimages/981/645/png-clipart-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-thumbnail.png'
                        }}
                        size={99}
                    />
                    <TouchableOpacity style={styles.UploadProfile} onPress={pickImage}>
                        <FontAwesome name="camera" color="#fff" size={12} />

                    </TouchableOpacity>
                </View>

                <View style={styles.ProfileInfo}>
                    <Text style={styles.bussinessName}>Farm Fresh </Text>
                </View>
                <View style={styles.socialMedia}>

                    <TouchableOpacity style={styles.socialIcons}>
                        <Image source={require('../assets/social/facebook.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialIcons}>
                        <Image source={require('../assets/social/instagram.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialIcons}>
                        <Image source={require('../assets/social/twitter.png')} />
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.socialIcons}>
                        <Image source={require('../assets/social/Website.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialIcons}>
                        <Image source={require('../assets/social/youtube.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.underline}>
                <Text style={styles.underlineText}></Text>
            </View>
            <View style={styles.accountInformation}>
                <Text style={styles.accountInformationHeading} >Account information  </Text>
                <View >

                    <TouchableOpacity style={styles.infoWrap} onPress={() => navigation.navigate('Basic')}>

                        <View style={styles.accountInformationBox}  >
                            <Image source={require('../assets/Form/nature.png')} style={{ width: 18, height: 18 }} />
                            <AccountInformation
                                Text='Basic info'
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.infoWrap} onPress={() => navigation.navigate('Address')}>

                        <View style={styles.accountInformationBox}>
                            <Image source={require('../assets/Form/Address.png')} style={{ width: 18, height: 18 }} />
                            <AccountInformation
                                Text='Address'
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.infoWrap} onPress={() => navigation.navigate('Contact')}>

                        <View style={styles.accountInformationBox}>
                            <Image source={require('../assets/Form/Phone.png')} style={{ width: 18, height: 18 }} />
                            <AccountInformation
                                Text='Contact'
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.infoWrap} onPress={() => { navigation.navigate('Social') }}>

                        <View style={styles.accountInformationBox}  >
                            <Image source={require('../assets/Form/Social.png')} style={{ width: 18, height: 18 }} />
                            <AccountInformation
                                Text='Social'
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Profile