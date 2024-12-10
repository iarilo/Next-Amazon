import { IProduct } from "./product.interface" 

 export interface Item {
    item:ICartItem
}

export interface ICartItem {
    id: number
    product: IProduct
    quantity:number
    prise: number
}