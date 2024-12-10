import { IProduct } from './product.interface'
import { IOrder } from './order.interface'

export interface IUser {
	map(arg0: (ell: IUser) => void): string
	id: number
	name: string
	email: string
	avatarPath: string
	phone: string
	password: string
	isAdmin: boolean
}

export interface IUserData {
	name?: string
	email: string
	avatarPath?: string
	phone?: string
	password?: string,
	
}

export interface IFullUser extends IUser {
	favorites: IProduct[]
	orders: IOrder[]
	Error: string
	review: number[]
	role:{
		id: number,
	    name: string
	}
}

export interface IMayProfile {
	id: number
	name: string
	email: string
	avatarPath: string
	phone: string
	favorites: IProduct[]
}
