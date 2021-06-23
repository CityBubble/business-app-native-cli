import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  location: {
    alignItems: 'center',
    backgroundColor: '#14161D',
    flex: 1
  }, 
  locationContainer: {
    marginTop: 80,
    width:'100%',
    alignItems:'center' 
  },
  locationText:{
    flexDirection:'row',
    alignItems:'center',  
  },  
  locationImage: {
    width: 200,
    height: 200,  
  },
  locationDropdownContainer: {
    marginTop: 100,
      // marginRight: 120
  },
  locationTouchable: {
    backgroundColor: '#000',
    width: 300,
    height: 55,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignSelf: 'stretch',
    marginTop: 15
  }, 
  dropdownText: {
    color:'#fff',
    padding:10,
    fontSize: 16
  },
  locationBtn: {
    padding: 12,
    marginTop: 67,
    width: 200,
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
    marginLeft: 10 
  },
  locationCity:{
    marginLeft:6,
    fontSize:18,
    color:'#4852ff',
    fontWeight:'700',  
  }  
})

  export default styles