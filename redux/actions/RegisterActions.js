import {REGISTER_APP_CHANGE} from '../ReduxConstants'
import firebase from 'firebase'
import 'firebase/firestore'

export  function registerUser(inputUserDetailsObject){
    return(dispatch)=>{
        console.log("Input User Object",JSON.stringify(inputUserDetailsObject))
        firebase.firestore()
            .collection('vendors')
            .add({
                authorFirstName: 'Madhur',
                authorLastName: 'Dheer',
                authorId: 12345,
                createdAt: new Date()
            }).then(()=>{
                console.log("Database successfully")
                dispatch({type:REGISTER_APP_CHANGE,inputUserDetailsObject});
            }).catch((err)=>{
                console.log("Error throw"+err)
                dispatch({type:REGISTER_APP_CHANGE,err});
            })
    }
};