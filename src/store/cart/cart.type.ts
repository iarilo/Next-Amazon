 import { ICartItem } from "types/cart.interface";
 
 // Получаю всё все данные кроме id
 export interface IAddToCartPayload extends
  Omit<ICartItem, 'id'> {};
 // Получаю всё все данные из корзины
 export interface ICartInitialState{
 items: ICartItem[]
 cartUserId:null | number
 };
 // Увеличиваю или уменьшаю количество в корзине, получаю только id
 export interface IChengeQantytyPaiload extends
 Pick<ICartItem, 'id'> {
  type: 'minus' | 'plus'
 }
 
 export type TypeSlize = 'SHOP' | 'TALL' | 'GRANDE' | 'VENTI'
// Добавляю id
 export interface IChangeSizePayload extends Pick<ICartItem,'id'>{
   size: TypeSlize 
 }