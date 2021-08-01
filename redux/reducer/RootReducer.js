import { combineReducers } from 'redux'
import RegisterReducer from './RegisterReducer';

const RootReducer = combineReducers({
    regsiter: RegisterReducer
})

export default RootReducer;