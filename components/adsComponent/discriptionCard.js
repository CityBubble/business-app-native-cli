import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from '../../styles/componentStyles/DiscriptionCardStyle'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const DiscriptionCard = (props) => {
    return (
        <View style={styles.discriptionAdd}>
            <View style={styles.durationStyles}>
                <View style={styles.durationHeading}>
                    <View style={styles.IconBorder}>
                        <Feather name="calendar" size={hp('2.8%')} color="#000" />
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
                        <FontAwesome name="ticket" size={hp('2.5%')} color="#fff" style={{ right: 16 }} />
                        <Text style={styles.textHeading}>Coupons</Text>
                    </View>
                    <Text style={styles.CouponsText}>{props.Coupons}</Text>
                </View>
                <View style={styles.infoSecond}>
                    <View style={styles.labelStyles}>
                        <FontAwesome name="eye" size={hp('2.5%')} color="#fff" style={{ right: 16 }} />
                        <Text style={styles.textHeading}>Ad Views</Text>
                    </View>
                    <Text style={styles.CouponsText}>{props.Views}</Text>
                </View>
                <Text style={styles.underlineTwo}></Text>
            </View>

            <View style={styles.GalleryStyles}>
                <View style={styles.durationHeading}>
                    <View style={styles.IconBorder}>
                        <Entypo name="images" size={hp('2.8%')} color="#000" />
                    </View>
                    <Text style={styles.HeadingStyle}>Gallery</Text>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.ImageContainer}>
                        <Image source={require('../../assets/test/testCase.png')} style={styles.imageStyles} />
                    </View>
                    <View style={styles.ImageContainer}>
                        <Image source={require('../../assets/test/offerDelhi.png')} style={styles.imageStyles}/>
                    </View>
                    <View style={styles.ImageContainer}>
                        <Image source={require('../../assets/ads/beetRoot.jpg')} style={styles.imageStyles} />
                    </View>
                </ScrollView>
                <Text style={styles.underline}></Text>
            </View>
            <View style={styles.termStyle}>
                <View style={styles.durationHeading}>
                    <View style={styles.IconBorder}>
                        <FontAwesome name="file-text" size={hp('2.8%')} color="#000" />
                    </View>
                    <Text style={styles.HeadingStyle}>Terms and Conditions</Text>
                </View>
                <View style={styles.TextContainer}>
                    <View style={styles.TermContainer}>
                    <Feather name="check" size={hp('2.5%')} color="#afafaf" style={styles.Icon} />
                        <Text style={styles.textStyles}>Lorem Ipsum is simply dummy text </Text>
                    </View>
                    <View style={styles.TermContainer}>
                    <Feather name="check" size={hp('2.5%')} color="#afafaf" style={styles.Icon} />
                        <Text style={styles.textStyles}>Lorem Ipsum is simply dummy text </Text>
                    </View>
                    <View style={styles.TermContainer}>
                    <Feather name="check" size={hp('2.5%')} color="#afafaf" style={styles.Icon} />
                        <Text style={styles.textStyles}>Lorem Ipsum is simply dummy text </Text>
                    </View>
                    <View style={styles.TermContainer}>
                    <Feather name="check" size={hp('2.5%')} color="#afafaf" style={styles.Icon} />
                        <Text style={styles.textStyles}>Lorem Ipsum is simply dummy text </Text>
                    </View>
                </View>
            </View>
        </View>

    )
}

export default DiscriptionCard


