import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RegisterNavigationStack from "./RegisterNavigationStack"
import MainNavigationStack from "./MainNavigationStack"
import {connect} from 'react-redux';
import {initialiseState} from '../redux/actions/StorageActions';






const Routes = (props) => {

    let isOnboardingCompleted;
    useEffect(async() =>{
        isOnboardingCompleted = await props.initialiseState();
    })

    return(
        <NavigationContainer independent={true}>
            {isOnboardingCompleted ? <MainNavigationStack/> : <RegisterNavigationStack />}
        </NavigationContainer>
    )
}


const mapDispatchToProps =(dispatch)=>{
    return{
        initialiseState:() => dispatch(initialiseState())
    }
} 
export default connect(null,mapDispatchToProps)(Routes);