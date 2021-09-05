import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, Modal,TouchableOpacity } from 'react-native'
import DiscriptionCard from '../components/adsComponent/discriptionCard'
import StopModal from '../components/warning/StopModal'
import RenewModal from '../components/warning/RenewModal'
import styles from '../styles/AddDescriptionStyle'


const AddDescriptions = ({ navigation }) => {
    const [show, setShow] = useState(false)
    const [refreshShow, setRefreshShow] = useState(false)
    return (
        <View style={styles.DescriptionContainer}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}>

                <View style={styles.BannerImage}>
                    <Image source={require('../assets/plans/veg.jpg')} style={styles.image} />
                </View>
                <View style={styles.headerStyle}>

                        <View style={styles.BackIcon}>
                        <TouchableOpacity onPress={() => navigation.goBack('Home')}>
                            <Image source={require('../assets/Image/back.png')} style={{ width: 20, height: 20 }} />
                            </TouchableOpacity>
                        </View>

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

