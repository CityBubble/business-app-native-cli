import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    informationContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: hp('2%'),
        justifyContent: 'space-between'
    },

    informationText: {
        color: '#fff',
        fontSize: hp('2.5'),
    }
})


export default styles