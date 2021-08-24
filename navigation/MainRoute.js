import React, {useEffect , useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RegisterNavigationStack from "./RegisterNavigationStack"
import MainNavigationStack from "./MainNavigationStack"
import {connect} from 'react-redux';
import {initialiseState} from '../redux/actions/StorageActions';






const Routes = (props) => {

    const [isOnboardingCompleted , setIsOnboardingCompleted] = useState(null)
    useEffect(async() =>{
        let stateValue = await props.initialiseState();
        if(stateValue === "false"){
            setIsOnboardingCompleted(false)
        } else{
            setIsOnboardingCompleted(true)
        }
    })

    return(
        <NavigationContainer independent={false}>
            {(isOnboardingCompleted) ? <MainNavigationStack/> : <RegisterNavigationStack />}
        </NavigationContainer>
    )
}


const mapDispatchToProps =(dispatch)=>{
    return{
        initialiseState:() => dispatch(initialiseState())
    }
} 
export default connect(null,mapDispatchToProps)(Routes);