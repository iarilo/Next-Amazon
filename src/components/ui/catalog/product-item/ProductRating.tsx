import React, { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { IProduct } from 'types/product.interface'
import { ReviewService } from 'services/review/review.service'
import styles from './page.module.css'

interface DataRating {
	rating: number
}

const ProductRating: FC<{ product: IProduct; idProduct: number }> = 
({product,idProduct,}) => {

	
	  // ***** Вычисляем начальный рейтинг *****
	const initialRating =Math.round(product.reviews.reduce((acc, review) => acc + review.rating, 0) /product.reviews.length,) || 0

	const [rating, setRating] = useState<number>(initialRating)

	// ***** Функция обработки данных, на кнопке *****
	// newRating данные из <Rating/>
	const handleRatingChange = async (newRating: number) => {
		// Перевщжу данные из <Rating/> в JSON формат
		const dataRating: DataRating = { rating: newRating }

		try {
			await ReviewService.createLeave(idProduct, dataRating)
			// ***** Обновляем рейтинг в состоянии компонента ****
			// массив данных по каждому клику
			const updatedReviews = [...product.reviews, { rating: newRating }]
           // Функция обработки среднего  rating
			const newAverageRating = Math.round(updatedReviews.reduce((acc, review) => acc + review.rating, 0) /updatedReviews.length,) || 0
			// ***** Обновляем рейтинг в состоянии компонента *****
			setRating(newAverageRating)
		} catch (error) {
			console.error('Ошибка при обновлении рейтинга:', error)
			// Можно добавить обработку ошибки или показать сообщение пользователю
		}
	}

	return (
		<div className={styles.container_Rating}>
			<span>
				<Rating
					initialValue={rating}
					SVGstyle={{ display: 'inline-block' }}
					size={24}
					allowFraction
					transition
					onClick={handleRatingChange} 
				/>
			</span>

			<span className={styles.container_Rating_number}>
				<span className={styles.container_Rating_responses}>рэйтинг </span>
				<span className={styles.container_Rating_colon}>: </span>
				{rating}
			</span>
		</div>
	)
}

export default ProductRating

// =====================================================

/*
interface DataRating {
	rating: number
}

const ProductRating: FC<{
	product: IProduct
	idProduct: number
}> = ({ product, idProduct }) => {
	const [rating, setRating] = useState<number>(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length,
		) || 0,
	)
	
    
 	const indexRating = (getRating: number) => {
		const dataRating: DataRating = { rating: getRating }
		ReviewService.createLeave(idProduct, dataRating)
		
	}

	return (
		<div className={styles.container_Rating}>
			<span>
				<Rating
					//readonly
					initialValue={rating}
					SVGstyle={{ display: 'inline-block' }}
					size={24}
					allowFraction
					transition
					onClick={indexRating}
				/>
			</span>

			<span className={styles.container_Rating_number}>
				<span className={styles.container_Rating_responses}>рэйтинг </span>
				<span className={styles.container_Rating_colon}>: </span>
				{rating}
			</span>
		</div>
	)
}

export default ProductRating
*/
