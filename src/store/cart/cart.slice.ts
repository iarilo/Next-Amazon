import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import{
    // Получаю всё все данные кроме id
 IAddToCartPayload,
 // Получаю всё все данные из корзины
 ICartInitialState,
   // Увеличиваю или уменьшаю количество в корзине, получаю только id
 IChengeQantytyPaiload   
} from './cart.type';

const initialStat: ICartInitialState = {
 items: []   
}   

export const cartSlice = createSlice({
 name: 'cart',
 initialState: initialStat,
 reducers:{
   // Добавление в корзину
    addToCart: (state,action: PayloadAction<IAddToCartPayload>) => {
   // some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.   
   // Проверяю на текущий элемент

     const isExist = state.items.some(
        (item) => item.product.id === action.payload.product.id
     ) 

   if (!isExist) {
      // Получаю объект { product: product,  quantity:1, prise: product.prise } из action.payload и заливаю его в initialStat items
         state.items.push( {...action.payload,id:state.items.length }  )
        //console.log('addToCart-state.items =',state.items)
     }
     
     
    },
  // Удаление из корзины
    removeFromCart:(state, action:PayloadAction<{id: number}>) => {
    state.items =  state.items.filter( item => item.id !== action.payload.id )
    },

    // изминение количества элементов в корзине
   changeQiantity : (state,action:PayloadAction<IChengeQantytyPaiload>)=> {
   const {id,type} = action.payload
   const item = state.items.find( item => item.id === id )
   if (item) type === 'plus' ? item.quantity++ : item.quantity--
   },
   //Очистка корзины
   reset: (state) => { state.items = []}

 }   
})

// export const {addToCart,removeFromCart,changeQiantity,reset } = cartSlice.actions
// export  default cartSlice.reducer

// 4:49