import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'

const DiscriptionCard = (props) => {
    return (
        <View style={styles.discriptionAdd}>
            <View style={styles.durationStyles}>
                <View style={styles.durationHeading}>
                    <View style={styles.IconBorder}>
                        <Feather name="calendar" size={20} color="#000" />
                    </View>
                    <Text style={styles.HeadingStyle}>Duration</Text>
                </View>

                <View style={styles.informationDuration}>
                    <View style={styles.infoFirst}>
                        <Text style={styles.textHeading}>Launched on</Text>
                        <Text style={styles.Date}>{props.Date}</Text>
                    </View>
                    <View style={styles.infoSecond}>
                        <Text style={styles.textHeading}>Valid till</Text>
                        <Text style={styles.Date}>{props.ValidDate}</Text>
                    </View>
                </View>
                <Text style={styles.underline}></Text>
            </View>
            <View style={styles.couponsStyles}>
                <View style={styles.infoFirst}>
                    <View style={styles.labelStyles}>
                        <FontAwesome name="ticket" size={24} color="#fff" style={{ right: 16 }} />
                        <Text style={styles.textHeading}>Coupons</Text>
                    </View>
                    <Text style={styles.CouponsText}>{props.Coupons}</Text>
                </View>
                <View style={styles.infoSecond}>
                    <View style={styles.labelStyles}>
                        <FontAwesome name="eye" size={24} color="#fff" style={{ right: 16 }} />
                        <Text style={styles.textHeading}>Ad Views</Text>
                    </View>
                    <Text style={styles.CouponsText}>{props.Views}</Text>
                </View>
                <Text style={styles.underlineTwo}></Text>
            </View>

            <View style={styles.GalleryStyles}>
                <View style={styles.durationHeading}>
                    <View style={styles.IconBorder}>
                        <Entypo name="images" size={20} color="#000" />
                    </View>
                    <Text style={styles.HeadingStyle}>Gallery</Text>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.ImageContainer}>
                        <Image source={require('../../assets/ads/mixVeg.jpg')} style={{ width: 130, height: 130, borderRadius: 12 }} />
                    </View>
                    <View style={styles.ImageContainer}>
                        <Image source={require('../../assets/ads/carrot.jpg')} style={{ width: 130, height: 130, borderRadius: 12 }} />
                    </View>
                    <View style={styles.ImageContainer}>
                        <Image source={require('../../assets/ads/beetRoot.jpg')} style={{ width: 130, height: 130, borderRadius: 12 }} />
                    </View>
                </ScrollView>
                <Text style={styles.underline}></Text>
            </View>
            <View style={styles.termStyle}>
                <View style={styles.durationHeading}>
                    <View style={styles.IconBorder}>
                        <FontAwesome name="file-text" size={20} color="#000" />
                    </View>
                    <Text style={styles.HeadingStyle}>Terms and Conditions</Text>
                </View>
                <View style={styles.TextContainer}>
                    <View style={styles.TermContainer}>
                    <Feather name="check" size={24} color="#afafaf" style={styles.Icon} />
                        <Text style={styles.textStyles}>Lorem Ipsum is simply dummy text </Text>
                    </View>
                    <View style={styles.TermContainer}>
                    <Feather name="check" size={24} color="#afafaf" style={styles.Icon} />
                        <Text style={styles.textStyles}>Lorem Ipsum is simply dummy text </Text>
                    </View>
                    <View style={styles.TermContainer}>
                    <Feather name="check" size={24} color="#afafaf" style={styles.Icon} />
                        <Text style={styles.textStyles}>Lorem Ipsum is simply dummy text </Text>
                    </View>
                    <View style={styles.TermContainer}>
                    <Feather name="check" size={24} color="#afafaf" style={styles.Icon} />
                        <Text style={styles.textStyles}>Lorem Ipsum is simply dummy text </Text>
                    </View>
                </View>
            </View>
        </View>

    )
}

export default DiscriptionCard

const styles = StyleSheet.create({
    discriptionAdd: {
        // flex: 1,
        backgroundColor: '#292930',
        width: 358,
        height: 670,
        borderRadius: 20
    },
    durationHeading: {
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center'
    },
    IconBorder: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    informationDuration: {
        marginLeft: 95
    },
    HeadingStyle: {
        fontSize: 20,
        marginLeft: 10,
        color: '#fff',
        fontWeight: '700'
    },

    infoFirst: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5
    },
    infoSecond: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5
    },
    textHeading: {
        textAlign: "left",
        fontSize: 18,
        letterSpacing: 0.36,
        width: 200,
        color: '#CDCDCD'
    },
    Date: {
        color: '#fff',
        fontSize: 15,
        letterSpacing: 0.36,
        width: 200,
        left: 52,
        fontWeight: '700'
    },
    underline: {
        backgroundColor: '#AFAFAF',
        height: 0.7,
        top: 12,
    },
    underlineTwo: {
        backgroundColor: '#AFAFAF',
        height: 0.7,
        right: 25,
        top: 15
    },
    labelStyles: {
        flexDirection: 'row',
 
    },
    couponsStyles: {
        top: 30,
        left: 25
    },
    CouponsText: {
        color: '#fff',
        fontSize: 15,
        letterSpacing: 0.36,
        fontWeight: '700',
        width: 100,
        left:22
    },
    GalleryStyles: {
        top: 50
    },
    ImageContainer: {
        margin: 10
    },
    termStyle: {
        top: 70
    },
    TermContainer: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center'
    },
  
    textStyles: {
        fontSize: 17,
        color: '#CDCDCD',
        left: 25
    },
    Icon:{
        left:10
    }




})
