import {combineReducers,configureStore} from '@reduxjs/toolkit'
import {  persistStore,persistReducer, FLUSH, PAUSE, PERSIST, PURGE,
          REGISTER, REHYDRATE} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage engine

const persistConfig = {
  key: 'amazon',
  storage,
  whitelist: ['cart'], 
};

// const rootReducer = combineReducers({
//   cart: createSlice.reducer,
//   carousel: carouselSlice.reducer
// })

//const persistedReducer = persistReducer(persistConfig,rootReducer)