import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
      
      registerScreen: {
          flex: 1,
          backgroundColor: '#14161D'

      }, 
      inputContainerInput: {
        marginTop: 25
      },
      Cards: {
          backgroundColor: '#000',
          borderRadius: 12,
        //   alignItems:'center'

      },
      secondCard: {
          backgroundColor: '#000',
          borderRadius: 12,
          height: 77
      },

      registerLabel: {
          left:19,
         fontSize:16,
         fontWeight:'700',
          marginBottom: 10,
          color: '#fff',
         
      },
      registerTextImage: {
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-evenly'
    },
      registerScreenInput: {
            alignItems:'center',
      }
})



export default styles