import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native'



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
                        <Text style={styles.InfoDetail} >{props.Starting}</Text>
                    </View>
                    <View style={styles.detailAds}>
                        <Text style={styles.InfoText}>Valid  till</Text>
                        <Text style={styles.InfoDetail} >{props.Ending}</Text>
                    </View>
                    <View style={styles.detailAds}>
                        <Text style={styles.InfoText}>Ads left</Text>
                        <Text style={styles.InfoDetailTwo} >{props.AdsLeft}</Text>
                    </View>
                    <View style={styles.Button}>

                        <TouchableOpacity onPress={props.onPress} style={props.buttonNameStyles}>
                            <Text style={styles.ButtonText}>{props.ButtonName}</Text>
                            <FontAwesome name={props.Icon}  color="#fff" size={18}/>

                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default SubscriptionTag

const styles = StyleSheet.create({


    insideBlock: {
        backgroundColor: '#363841',
        width: 339,
        alignItems: 'center',
        height: 258,
        borderRadius: 12,
        justifyContent: 'space-evenly'
    },
    TextName: {
        color: '#fff',
        fontSize: 18,
        left: 7
    },
    Heading: {
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center'
    },

    priceFix: {
        flexDirection: 'row',
        top: 10
    },
    TextPrice: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 41,
        left: 2
    },
    RuppeeIcon: {
        top: 15,
        fontWeight: '800'
    },
    TextMonth: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        top: 10
    }
    , detailAds: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    InfoText: {
        right: 50,
        fontSize: 15,
        letterSpacing: 0.36,
        color: '#B4B4B4'
    },
    InfoDetail: {
        textAlign: 'left',
        left: 50,
        fontSize: 15,
        color: '#fff',
        fontWeight: '600'
    },
    AddDetail: {
        padding: 15
    },
    plans: {
        alignItems: 'center',
        borderRadius: 200 / 2,
        width: 111,
        left: 119,
        top: 40,
        backgroundColor: '#363841',
        borderColor: '#fff',
        height: 80,



    },
    PlansText: {
        top: 10,
        fontSize: 15,
        color: '#fff',
        fontWeight: '700'
    },
    InfoDetailTwo: {
        right: 75,
        color: '#fff',
        fontWeight: '600'
    },
    buttonName: {
        backgroundColor: '#FD8B3C',
        alignItems: 'center',
        padding: 8,
        top: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 150,
        left: 20
    },
    ButtonText: {
        color: '#fff',
        fontWeight: '700',
        right: 10

    },
    Button: {
        padding: 12
    }




})