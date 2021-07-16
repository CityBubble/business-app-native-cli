import {StyleSheet} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Proofstyles = StyleSheet.create({
    proofsContainer: {
      flex: 1,
      backgroundColor: '#14161D'
    },
  
    cardsUploads: {
      backgroundColor: 'transparent',
      borderRadius: 12,
      width: wp('70%'),
      height: hp('17.2%'),
      alignItems: 'center',
  }  ,
    inputContainerLogo: {
      alignItems: 'center',
      top: hp('7%'),
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
      left: wp('1%'),
      fontSize: hp('2.3%')
  
    },
    cardButtonText: {
      color: '#fff',
      textAlign: 'center'
    },
    buttonDelete: {
      borderWidth: 1,
      borderColor: '#424CEB',
      borderRadius: 6,
      width: wp('23%'),
      padding: wp('2%'),
      left: wp('3%')
    },
    cardButton: {
      borderWidth: 1,
      borderColor: '#424CEB',
      borderRadius: 6,
      width: wp('30%'),
      padding: wp('2.5%'),
  
    },
    cardButtonCamera: {
      borderWidth: 1,
      borderColor: '#424CEB',
      borderRadius: 6,
      width: wp('30%'),
      padding: wp('2.5%'),
      left:wp('3%')
  
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center'
    },
    contentCard: {
      flexDirection: 'row',
      alignItems: 'center',
      top: hp('.5%')
    }
    , imageUpload: {
      width: wp('80%'),
      height: hp('27.5%'),
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12
    },
    buttonContainer: {
      flexDirection: 'row',
      top: hp('1.8%'),
      
    },
    button: {
      top: hp('10%')
    },
    checkboxContainer: {
      flexDirection: 'row',
      marginTop: hp('4%'),
      right:wp('2%'),
  }
  ,
  checkboxLabel: {
      color: '#BFBFBF',
      width: wp('75.5%'),
      textAlign: 'left',
      fontSize: wp('3.9%'),
  
  }
  
  })
  

export default Proofstyles