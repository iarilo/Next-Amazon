import { IUser } from './user.interface'

export interface IReview {
	id: number
	createAt: string
	rating: string
	text: string
	newuser: IUser
}

export interface IReviewData {
	rating: number
	text: string
}
