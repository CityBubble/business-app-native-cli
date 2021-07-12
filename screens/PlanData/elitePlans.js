import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import PlanInfoCard from '../../components/planInfoCard'


const ElitePlansData = ({ navigation }) => {
    return (
        <View style={styles.planContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('TabNavigation')}>
                    <Image source={require('../../assets/Image/back.png')} />
                </TouchableOpacity>
                <View style={styles.headerLogo}>
                    <Image source={require('../../assets/plans/Crown.png')} style={{ width: 55, height: 35, right: 10 }} />
                    <Text style={styles.headerText}>Elite Plan</Text>
                </View>
            </View>
            <View style={styles.CardHeader}>

                <Text style={styles.headingPlan}>Select your package</Text>

                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}

                >
                    <View style={styles.cards}>

                        <PlanInfoCard
                            Image={require('../../assets/arts/PurpleHeader.png')}
                            ImageStyle={styles.ImageBannerStyle}
                            planName="Most Popular"
                            PriceSale="2299"
                            price="1299"
                            duration="for 6 months"
                            ruppesText={styles.ruppesTextPurple}
                            priceText={styles.priceText}
                            buttonStyles={styles.ButtonPurple}
                        />
                    </View>
                    <View style={styles.cards}>

                        <PlanInfoCard
                            Image={require('../../assets/arts/greenHeader.png')}
                            ImageStyle={styles.ImageBannerStyle}
                            planName="Mega Saver"
                            PriceSale="3399"
                            price="2399"
                            duration="for 12 months"
                            ruppesText={styles.ruppesTextGreen}
                            priceText={styles.priceTextGreen}
                            buttonStyles={styles.ButtonGreen}
                        />
                    </View>
                    <View style={styles.cards}>
                        <PlanInfoCard
                            Image={require('../../assets/arts/blueHead.png')}
                            ImageStyle={styles.ImageBannerStyle}
                            planName="Basic"
                            PriceSale="699"
                            price="499"
                            duration="for 6 months"
                            ruppesText={styles.ruppesTextBlue}
                            priceText={styles.priceTextBlue}
                            buttonStyles={styles.ButtonBlue}
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default ElitePlansData

const styles = StyleSheet.create({
    planContainer: {
        flex: 1,
        backgroundColor: '#14161d',
    },
    headingPlan: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
        bottom: 25

    },
    header: {
        padding: 12,
        margin: 12,
        flexDirection: 'row'
    },
    headerLogo: {
        alignItems: 'center',
        flexDirection: 'row',
        left: 77
    },
    headerText: {
        color: '#fff',
        fontSize: 20
    },
    CardHeader: {
        top: 60
    },
    ImageBannerStyle: {
        width: 290,
        height: 97,
        resizeMode: 'contain',
        bottom: 20
    },
    ruppesTextPurple: {
        color: '#A862E1',
        fontSize: 28,
        fontWeight: '700',
        right: 10
    },
    ruppesTextGreen: {
        color: '#41E291',
        fontSize: 28,
        fontWeight: '700',
        right: 10
    },
    ruppesTextBlue: {
        color: '#66B0B8',
        fontSize: 28,
        fontWeight: '700',
        right: 10
    },
    priceText: {
        color: '#A862E1',
        fontSize: 50,
        fontWeight: '900'
    },
    priceTextGreen: {
        color: '#41E291',
        fontSize: 50,
        fontWeight: '900'
    },
    priceTextBlue: {
        color: '#66B0B8',
        fontSize: 50,
        fontWeight: '900'
    },
    ButtonPurple: {
        borderWidth: 3,
        padding: 12,
        borderRadius: 22,
        width: 200,
        alignItems: 'center',
        borderColor: '#A862E1'
    },
    ButtonGreen: {
        borderWidth: 3,
        padding: 12,
        borderRadius: 22,
        width: 200,
        alignItems: 'center',
        borderColor: '#41E291'
    },
    ButtonBlue: {
        borderWidth: 3,
        padding: 12,
        borderRadius: 22,
        width: 200,
        alignItems: 'center',
        borderColor: '#66B0BB'
    },

    cards: {
        marginRight: 15
    },


})
