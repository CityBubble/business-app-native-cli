/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import Routes from './navigation/MainRoute';
 import { Provider } from 'react-redux'
 import { createStore, applyMiddleware} from 'redux'
 import RootReducer from './redux/reducer/RootReducer'
 import thunk from 'redux-thunk'
 
 const store = createStore(RootReducer, applyMiddleware(thunk))

 
 export default function App() {
   return (
     <Provider store={store}>
       <Routes />
     </Provider>
   );
 }