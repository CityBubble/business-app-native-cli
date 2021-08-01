const initState = {
    projects : [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'} 
    ]
}

import {REGISTER_APP_CHANGE} from '../ReduxConstants'

const RegisterReducer = (state = initState,action)=>{
    switch(action.type){
        case REGISTER_APP_CHANGE:
            console.log('vendor register in the add',action)
            return state;
        default:
            return state;
    }
}

export default RegisterReducer;