// userActions Получает все actions из  cart.slice.ts  cartSlice ( методы user -> register, login, logout и checkAuth  и  методы cart ->  addToCart, removeFromCart, changeQiantity, reset )   

// Жёстко  привязываю все экспорты из actions в userActions
import * as userActions from './user/user.actions';
// ...userActions это методы  register, login, logout и checkAuth 
import {cartSlice} from './cart/cart.slice';

export const rootAcnions = {
    ...userActions,
    ...cartSlice.actions
}
