import localStorageLib from 'redux-persist/lib/storage' //local storage
import sessionStorageLib from 'redux-persist/lib/storage/session' // session storage
import shoppingCartReducer from "./features/shoppingCart/ShoppingCartSlice";
import usersReducer from './features/users/UsersSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

// const configuration = {
//     key: 'globalStorage',
//     storage
// }

const localStorageConfiguration = {
    key: 'local',
    storage : localStorageLib,
    blacklist:['users']
}

const sessionStorageConfiguration = {
    key: 'session',
    storage : sessionStorageLib
}

const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
    users : persistReducer (sessionStorageConfiguration , usersReducer)

})

const persistedReducer = persistReducer(localStorageConfiguration, rootReducer)

export const Store = configureStore({
    reducer: persistedReducer
})

export const myPersistor = persistStore(Store)



