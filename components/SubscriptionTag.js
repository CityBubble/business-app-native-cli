import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native'
import styles from '../styles/componentStyles/SubscriptionTagstyles'


const SubscriptionTag = (props) => {
    return (
        <View style={styles.TagContainer}>
            <View style={styles.plans}>

                <Text style={styles.PlansText} >Your Plan</Text>
            </View>
            <View style={styles.insideBlock}>
                <View style={styles.Heading}>

                    <Image source={props.Image} style={props.ImageStyle} />
                    <Text style={styles.TextName}>{props.planName}</Text>
                </View>
                <View style={props.price}>
                    <View style={styles.priceFix}>
                        <FontAwesome name="rupee" size={24} color="#fff" style={styles.RuppeeIcon} />
                        <Text style={styles.TextPrice}>{props.planPrice}</Text>
                    </View>
                    <Text style={styles.TextMonth}>{props.month}</Text>
                </View>
                <View style={styles.AddDetail}>
                    <View style={styles.detailAds}>
                        <Text style={styles.InfoText}>Started on</Text>
                        <Text style={styles.InfoText}>Valid  till</Text>
                        <Text style={styles.InfoText}>Ads left</Text>
                    </View>
                    <View style={styles.detailDescrip}>
                        <Text style={styles.InfoDetail} >{props.Starting}</Text>
                        <Text style={styles.InfoDetail} >{props.Ending}</Text>
                        <Text style={styles.InfoDetail} >{props.AdsLeft}</Text>
                    </View>
                  
                </View>
                    <View style={styles.Button}>

                        <TouchableOpacity onPress={props.onPress} style={props.buttonNameStyles}>
                            <Text style={styles.ButtonText}>{props.ButtonName}</Text>
                            <FontAwesome name={props.Icon} color="#fff" size={18} />

                        </TouchableOpacity>
                    </View>

            </View>
        </View>
    )
}

export default SubscriptionTag

