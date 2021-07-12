import React from 'react'
import { StyleSheet, Text, View,Modal,Image,TouchableOpacity } from 'react-native'

const StopModal = (props) => {
   
    return (
       
            <Modal transparent visible={props.Visible}>
                <View style={styles.stopModalBackground}>
                    <View style={styles.stopModalAlert}>
                        <Image source={require('../../assets/ads/stop.png')} style={{width:40,height:45,left:135,}} />
                        <View style={styles.stopModalText}>
                            <Text style={styles.stopModalHeading}>Stop Ad</Text>
                            <Text style={styles.stopModalPara} >Are you sure you want to stop the ad?</Text>
                        </View>
                        <View style={styles.stopModalButton} >
                            <TouchableOpacity style={styles.btnNo} onPress={props.noPress}>
                                <Text style={styles.stopBtnNo}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnYes} onPress={props.yesPress}>
                                <Text style={styles.stopBtnYes}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
     
    )
}

export default StopModal

const styles = StyleSheet.create({
stopModalBackground:{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
},
stopModalAlert:{
    width: 310,
    height: 240,
    backgroundColor: '#262626',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 20
},
stopModalText:{
    top:20,
    alignItems:'center'
},
 stopModalButton:{
     top:20,
     flexDirection:'row',
     justifyContent:'space-around',
     padding:15
 },
 btnNo:{
     backgroundColor:'#EC8B40',
     padding:12,
     width:90,
     height:43,
     alignItems:'center',
     borderRadius:12
 },
 btnYes:{
     backgroundColor:'transparent',
     padding:12,
     width:90,
     height:43,
     alignItems:'center',
     borderRadius:12,
     borderWidth:1,
     borderColor:'#fff'
 },
 stopBtnNo:{
     color:'#fff',
     fontSize:18,
     bottom:1,
     fontWeight:'700'
},
 stopBtnYes:{
     color:'#fff',
     fontSize:18,
     bottom:1
},
stopModalHeading:{
    fontSize:20,
    color:'#fff',
    fontWeight:'800'
},
stopModalPara:{
    fontSize:17,
    color:'#fff',
    textAlign:'center',
    padding:12
}

})
