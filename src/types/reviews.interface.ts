import { IUser } from './type-user.interface'

export interface IReview {
	id: number
	createAt: string
	rating: number
	text: string
	newuser: IUser
}

export interface IReviewData {
	rating: number
	text: string
}
