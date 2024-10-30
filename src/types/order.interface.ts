import { ICartItem } from './cart.interface'
import { IUser } from './type-user.interface'

export enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED',
}

export interface IOrder {
	id: number
	createAt: string
	items: ICartItem[]
	status: EnumOrderStatus
	user: IUser
}

export interface IOrderItem {
	price: number
	productId: number
	quantity: number
}

export interface IOrderPayPal {
	items: IOrderItem[]
}


