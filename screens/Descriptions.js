import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import DiscriptionCard from '../components/adsComponent/discriptionCard'

const Descriptions = ({ navigation }) => {
    return (
        <View style={styles.DescriptionsContainer}>
        <ScrollView>
            
            <View style={styles.Background}>
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
        </View>
    )
}

export default Descriptions

const styles = StyleSheet.create({
    DescriptionsContainer: {
        flex: 1,
        backgroundColor: '#14161d'
    },
    Background: {
        backgroundColor: '#ECC710',
        height: 206
    },
    offer: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 94,
    },
    BackIcon: {
        width: 35,
        padding: 6,
        backgroundColor: '#fff',
        borderRadius: 50,
        left: 16,
        top: 10
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
        bottom: 29,
        alignItems: 'center'
    },

})
