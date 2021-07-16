import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  location: {
    alignItems: 'center',
    backgroundColor: '#14161D',
    flex: 1
  }, 
  locationContainer: {
    marginTop: hp('10%'),
    width:wp('70%'),
    alignItems:'center' 
  },
  locationText:{
    flexDirection:'row',
    alignItems:'center',  
  },  
  locationImage: {
    width: wp('50%'),
    height: hp('25%'),  
  },
  locationDropdownContainer: {
    marginTop: hp('10%'),
      
  },
  locationTouchable: {
    backgroundColor: '#000',
    width: wp('80%'),
    height: hp('7%'),
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp('5%'),
    alignSelf: 'stretch',
    marginTop: hp('2%')
  }, 
  dropdownText: {
    color:'#fff',
    padding:10,
    fontSize: 16
  },
  
  locationAccess:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight:'400'
  },
  locationTextSmall:{
    color: '#fff',
    fontWeight:'800', 
    fontSize: 14,
    marginLeft: wp('2%') 
  },
  locationCity:{
    marginLeft:6,
    fontSize:18,
    color:'#4852ff',
    fontWeight:'700',  
  }  
})

  export default styles