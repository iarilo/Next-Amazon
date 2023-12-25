import { instance } from 'app/api.interceptor'
import { IReview, IReviewData } from 'types/reviews.interface'

const REVIEW = 'review'

export const ReviewService = {
	async getall() {
		return instance<IReview[]>({
			url: REVIEW,
			method: 'GET',
		})
	},

	async createLeave(productId: number | string, data: IReviewData) {
		return instance<IReview>({
			url: `${REVIEW}/leave/${productId}`,
			method: 'POST',
			data: data,
		})
	},
}
