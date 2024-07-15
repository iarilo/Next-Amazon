import {combineReducers,configureStore} from '@reduxjs/toolkit'
import {  persistStore,persistReducer, FLUSH, PAUSE, PERSIST, PURGE,
          REGISTER, REHYDRATE} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage engine
import userSlice  from './user/user.slice';



// НАСТРОЙКА  Redux и СОЗДАНИЕ хранилище Redux для МАГАЗИНА 
// https://redux-toolkit.js.org/usage/usage-guide

 // Сохроняю данные в locallStorage для корзины при перезагрузки
const persistConfig = {
  key: 'amazon-v2',
  storage: storage,
  whitelist: ['cart'], // whitelist что именно будит записано
};




// Комбаин Reducer для совмещения множества Reducer( cart и carousel)   
const rootReducer = combineReducers({
  // cart: createSlice.reducer,
  // carousel: carouselSlice.reducer

  // cart: '',
  // carousel: '',

  user:  userSlice 
})




// делаю подклячение к  persistReducer
const persistedReducer = persistReducer(persistConfig,rootReducer)


 // Конфигурация store(магазин)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


 export const persiStor =  persistStore(store);
 export default store;


// Возврощаю тип удобного стэйта  для использования в куки
export type TypeRootState =  ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch



