import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, Modal } from 'react-native'
import DiscriptionCard from '../components/adsComponent/discriptionCard'
import StopModal from '../components/warning/StopModal'
import RenewModal from '../components/warning/RenewModal'

const AddDescriptions = ({ navigation }) => {
    const [show, setShow] = useState(false)
    const [refreshShow, setRefreshShow] = useState(false)
    return (
        <View style={styles.DescriptionContainer}>
            <ScrollView>

                <View style={styles.BannerImage}>
                    <Image source={require('../assets/plans/veg.jpg')} style={{ height: 290, width: 398, resizeMode: 'cover' }} />
                </View>
                <View style={styles.headerStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View style={styles.BackIcon}>
                            <Image source={require('../assets/Image/back.png')} style={{ width: 20, height: 20 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.offer}>
                        <Text style={styles.textWhite}>Flat</Text>
                        <Text style={styles.textGreen}>20%</Text>
                        <Text style={styles.textWhite}>Off</Text>
                    </View>
                </View>
                <View style={styles.DiscriptionCard}>
                    <DiscriptionCard
                        Date="21 Sept,2021"
                        ValidDate="21 Oct,2021"
                        Coupons="300"
                        Views="1000"
                    />
                </View>
            </ScrollView>

            <StopModal
                Visible={show}
                noPress={() => setShow(false)}
            />

            <RenewModal
                Visible={refreshShow}
                onPress={() => { setRefreshShow(false) }}
            />

            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.refreshBtn} onPress={() => setRefreshShow(true)} >
                    <Text style={styles.refreshText}>Renew Ad</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.StopBtn} onPress={() => setShow(true)} >
                    <Text style={styles.stopText}>Stop Ad</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddDescriptions

const styles = StyleSheet.create({
    DescriptionContainer: {
        flex: 1,
        backgroundColor: '#14161d'
    },
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 330,
        backgroundColor: 'rgba(0,0,0,0.4)',
        height: 340
    },
    offer: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 74,
        bottom: 82

    },
    BackIcon: {
        left: 10,
        padding: 6,
        backgroundColor: '#fff',
        borderRadius: 50,
        bottom: 92
    },
    textWhite: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold'
    },
    textGreen: {
        color: '#0BB739',
        fontSize: 46,
        fontWeight: 'bold'
    },
    DiscriptionCard: {
        bottom: 409,
        alignItems: 'center'
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#A5A5A5',
        backgroundColor: '#4852ff',
        height: 60,

    },
    StopBtn: {
        alignItems: 'center',
        padding: 12,
        borderLeftWidth: 1,
        borderLeftColor: '#A5A5A5',
        width: 190,
    },
    refreshBtn: {
        alignItems: 'center',
        width: 190,
        padding: 12,

    },
    stopText: {
        fontSize: 20,
        padding: 12,
        color: '#fff',
        fontWeight: '700',
        bottom: 10

    },
    refreshText: {
        fontSize: 20,
        padding: 12,
        color: '#fff',
        fontWeight: '700',
        bottom: 10

    }
}
)
