import { instance } from 'app/api.interceptor'
import { IReview, IReviewData } from 'types/reviews.interface'



interface DataRating  {
	rating:number
}


const REVIEW = '/review'

export const ReviewService = {
	async getall() {
		return instance<IReview[]>({
			url: REVIEW,
			method: 'GET',
		})
	},

	async createLeave(productId: number, data: DataRating) {
			return instance<IReview>({
			//url: `${REVIEW}/leave/${productId}`,
			url: `/review/leave/${productId}`,
			method: 'POST',
			data: data,
		})
	},

	async getAverageByProduct(productId: number | string) {
		// console.log('getAverageByProduct-productId =',productId )
		return instance<number>({
			url: `${REVIEW}/avarege-by-product/${productId}`,
			method: 'GET',
		})
	},

}
