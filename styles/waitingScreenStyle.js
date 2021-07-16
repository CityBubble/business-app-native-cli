import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    UnderReviewScreenContainer: {
        backgroundColor: '#14161d',
        flex: 1,
        opacity: 1
    },
    UnderReviewScreenImage: {

        alignItems: 'center',
        top: hp('10%'),
        opacity: 0.9
    },
    UnderReviewScreenText: {
        top: hp('18%'),
        alignItems: 'center',
    },
    textHeading: {
        fontSize: hp('4.5%'),
        fontWeight: '600',
        color: '#fff',
        letterSpacing: 0.75,
        padding: wp('3%')
    },
    textParagraph: {
        color: '#fff',
        fontSize: hp('2.5%'),
        letterSpacing: 0.68,
        textAlign: 'center',
        width: wp('80%')
    },
    UnderWaitingScreenContainer: {
        backgroundColor: '#14161d',
        flex: 1,
        opacity: 1
    },
    UnderWaitingScreenImage: {
        alignItems: 'center',
        top: hp('1%'),
        opacity: 0.9
    },
    UnderWaitingScreenText: {
        top: hp('2%'),
        alignItems: 'center',
    },
    textHeadingWaiting: {
        fontSize: hp('3.2%'),
        fontWeight: '600',
        color: '#fff',
        letterSpacing: 0.75,
        padding: wp('2%')
    },
    textParagraphWaiting: {
        color: '#fff',
        fontSize: hp('2.7%'),
        letterSpacing: 0.68,
        textAlign: 'center',
        width: wp('80%')
    }
})

export default styles