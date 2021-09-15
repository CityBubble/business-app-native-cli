
import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { MarkerUnits } from 'react-native-svg'
import History from '../components/historyAd/history'
import HistoryNew from '../components/historyAd/historynew'
const DATA=[{id:'1',launch:'21 oct',expiry:'28 oct',views:10,coupones:30,terms:['term1','term2','term3']},
{id:'2',launch:'24 oct',expiry:'25 oct',views:11,coupones:55,terms:['term4','term5','term6']},
{id:'3',launch:'22 oct',expiry:'29 oct',views:70,coupones:60,terms:['term7','term8','term9']}]

const renderItem = (listItem,navigation) => {
    const adItem = listItem.item;
  return  <TouchableOpacity onPress={()=>navigation.navigate({name:'AddDescriptions',params:{adItem}})}>
  <HistoryNew
            adData={listItem.item}
            Image={require('../assets/ads/mixVeg.jpg')} />

     </TouchableOpacity>
}


const adsHistoryScreen = ({navigation}) => {
    return (
        <View style = {styles.historyContainer}>
        <FlatList
         data = {DATA}
         renderItem = {(item)=>renderItem(item,navigation)}
         keyExtractor = {(item) =>{item.id}}
        ></FlatList>     
    </View>
    )}
export default adsHistoryScreen
const styles = StyleSheet.create({
    historyContainer:{
        flex: 1,
        backgroundColor: '#14161D'
    }
})
