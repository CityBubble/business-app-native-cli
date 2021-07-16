import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    publishContainer: {
        flex: 1,
        backgroundColor: '#14161d',
    },
    inputContainerInput: {
        marginTop: hp('2%'),
        left: wp('5%'),
        paddingTop: hp('2%')

    },
    Cards: {
        backgroundColor: '#000',
        borderRadius: 12,
        alignItems: 'center'

    },
 

    registerLabel: {
        left: wp('2%'),
        fontSize: hp('2.2%'),
        fontWeight: '700',
        marginBottom: hp('1%'),
        color: '#fff',

    },
    registerTextImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    uploadImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        right: wp('10')
    },
    registerTitleImage: {
        flexDirection: 'row',
        left: wp('2%'),
        bottom:hp('2%')
    },
    registerScreenInput: {
        alignItems: 'center',
    },
    CardsDiscription: {
        backgroundColor: '#000',
        borderRadius: 12,
        height: hp('12%')
    },
    calenderStyles: {
        backgroundColor: '#000',
        borderRadius: 12,
        width: wp('40%'),
        height: hp('5%'),
        alignItems: "center"

    },

    calenderText: {
        color: '#fff',
        marginTop: hp('1.2%')
    },
    CardsCalender: {
        backgroundColor: '#000',
        borderRadius: 12,
        height: hp('6%'),
        width: wp('40%'),
        left: wp('2%')
    },
    registerSub: {
        color: '#C6C6C7',
        left: wp('3%')
    },
    uploadButton:{
        width:wp('40%'),
        height:hp('15.5%'),
        borderWidth:1,
        borderColor:'#fff',
        alignItems:'center',
        borderRadius:22,
        padding:wp('2%'),
        right:wp('15%')
    },
    uploadText:{
        top:hp('1%'),
        color:'#fff',
        fontSize:hp('2%')
    },
    BtnContainer:{
        top:hp('3%'),
        alignItems:'center'
    },
    btnStyle:{
        backgroundColor:'#4852ff',
        padding:wp('2%'),
        width:wp('40%'),
        alignItems:'center',
        borderRadius:19
    },
    btnText:{
        color:'#fff',
        fontSize:hp('2.5%'),
        fontWeight:'600'
    }
})

export default styles