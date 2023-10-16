//import storage from 'redux-persist/lib/storage' //local storage
import storage from 'redux-persist/lib/storage/session' // session storage
import shoppingCartReducer from "./features/shoppingCart/ShoppingCartSlice";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

const configuration = {
    key: 'globalStorage',
    storage
}

const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
})

const persistedReducer = persistReducer(configuration, rootReducer)

export const Store = configureStore({
    reducer: persistedReducer
})

export const myPersistor = persistStore(Store)



