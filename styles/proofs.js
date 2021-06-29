import {StyleSheet} from 'react-native'




const Proofstyles = StyleSheet.create({
    proofsContainer: {
      flex: 1,
      backgroundColor: '#14161D'
    },
  
    cardsUploads: {
      backgroundColor: 'transparent',
      borderRadius: 12,
      width: 261,
      height: 114,
      alignItems: 'center',
  
  
    }
  
    ,
  
    inputContainerLogo: {
      alignItems: 'center',
      top: 35,
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 19,
      borderStyle: 'dotted'
  
    },
    proofsContainerInput: {
  
      alignItems: 'center',
  
    },
    cardText: {
      color: '#fff',
      left: 12,
      fontSize: 17
  
    },
    cardButtonText: {
      color: '#fff',
      textAlign: 'center'
    },
    buttonDelete: {
      borderWidth: 1,
      borderColor: '#424CEB',
      borderRadius: 6,
      width: 90,
      padding: 6,
      left: 15
    },
    cardButton: {
      borderWidth: 1,
      borderColor: '#424CEB',
      borderRadius: 6,
      width: 100,
      padding: 6,
  
    },
    cardButtonCamera: {
      borderWidth: 1,
      borderColor: '#424CEB',
      borderRadius: 6,
      width: 100,
      padding: 6,
      left:10
  
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center'
    },
    contentCard: {
      flexDirection: 'row',
      alignItems: 'center',
      top: 10
    }
    , imageUpload: {
      width: 330,
      height: 180,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12
    },
    buttonContainer: {
      flexDirection: 'row',
      top: 12,
      
    },
    button: {
      top: 90
    },
    checkboxContainer: {
      flexDirection: 'row',
      marginTop: 40,
      right:10,
      
  
  }
  ,
  checkboxLabel: {
      color: '#BFBFBF',
      width: 264,
      textAlign: 'left',
      fontSize: 14,
  
  }
  
  })
  

export default Proofstyles