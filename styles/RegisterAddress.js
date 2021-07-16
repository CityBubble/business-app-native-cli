import { Platform } from 'react-native'
import {StyleSheet} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const styles = StyleSheet.create({
      
      registerScreen: {
          flex: 1,
          backgroundColor: '#14161D'

      }, 
      inputContainerInput: {
        marginTop: hp('3.2%')
      },
      Cards: {
          backgroundColor: '#000',
          borderRadius: 12,
       },
      secondCard: {
          backgroundColor: '#000',
          borderRadius: 12,
          height: hp('14%')
      },

      registerLabel: {
          left:wp('3%'),
         fontSize:hp('2.4%'),
         fontWeight:'700',
          marginBottom: hp('1.5%'),
          color: '#fff',
         
      },
      registerTextImage: {
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-evenly'
    },
      registerScreenInput: {
            alignItems:'center',
      },
      Icon:{
        width:Platform.OS==='ios'?wp('6.9%'):wp('7.9%'), 
          height:Platform.OS==='ios'? hp('3.9%'):hp('4.2%') 
      }
})



export default styles