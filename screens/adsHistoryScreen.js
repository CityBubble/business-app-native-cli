import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native'
import History from '../components/historyAd/history'

const adsHistoryScreen = ({navigation}) => {
    return (
        <View style={styles.historyContainer}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            >
   <View>
       <TouchableOpacity onPress={()=>navigation.navigate('AddDescriptions')}>

       <History
       Date="21 oct 2021"
       Launched="21 oct 2021"
       Expired="21 nov 2021"
       ticket="300"
       Views="1000 views"
       Image={require('../assets/ads/mixVeg.jpg')}
       />
       </TouchableOpacity>
   </View>
   <View>
       <TouchableOpacity onPress={()=>navigation.navigate('AddDescriptions')}>

       <History
       Date="29 oct 2021"
       Launched="29 oct 2021"
       Expired="29 nov 2021"
       ticket="800"
       Views="1200 views"
       Image={require('../assets/ads/beetRoot.jpg')}
       />
       </TouchableOpacity>
   </View>
   <View>
       <TouchableOpacity onPress={()=>navigation.navigate('AddDescriptions')}>

       <History
       Date="21 Dec 2021"
       Launched="21 Dec 2021"
       Expired="21 jan 2022"
       ticket="300"
       Views="1090 views"
       Image={require('../assets/ads/carrot.jpg')}
       />
       </TouchableOpacity>
   </View>
            </ScrollView>
        </View>
    )
}

export default adsHistoryScreen

const styles = StyleSheet.create({
    historyContainer:{
        flex: 1,
        backgroundColor: '#14161D'
    }
})
