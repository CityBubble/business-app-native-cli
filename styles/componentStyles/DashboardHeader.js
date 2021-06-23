import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    dashboardHeaderContainer:{
        backgroundColor:'#40424A',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        height:50,
        alignItems:'center',
        zIndex:1
    },
    icon:{
        backgroundColor:'#40424A',
        borderRadius:55,
        padding:5 ,
        alignItems:'center',
    borderColor:'#fff'
    },
    name:{
        fontSize:17,
        color:'#fff'
    },
    buttonContainer:{
        flexDirection:'row',  
    },
    addsButton:{
        right:57,
    },
    duesButton:{
        left:57
    },
    textButton:{
        fontSize:18,
        color:'#A5A5A5',
        fontWeight:'700'
    }
})

export default styles