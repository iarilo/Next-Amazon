import React, { FC } from 'react'
import { IProduct } from 'types/product.interface'
import Image from 'next/image'
import FavoriteButton from './FavoriteButton'
import AddToCardButton from './AddToCardButton '
import ProductRating from './ProductRating'
import styles from './page.module.css'
import dynamic from 'next/dynamic'

const DynamicFavoriteButton = dynamic(
	()=> import('./FavoriteButton'),{ssr: false}
 )

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	const { id, name, images, category } = product
	//console.log('ProductItem - products =', product)
	//console.log('ProductId = ', id)

	return (
		<div>
			<div className={styles.container_ProductItem}>
				<div className={styles.content_ProductItem}>
					<div className={styles.content_ProductItem_Cart}>
						<DynamicFavoriteButton productId={product.id} />
						<AddToCardButton product={product} productId={id} />
					</div>
					<Image
						width={150}
						height={150}
						src={images[0]}
						alt={name}
						priority={true}
						className={styles.content_ProductItem_Image}
					/>

					<h3 className={styles.content_ProductItem_name}>
						<span className={styles.content_span_name}>
							название
							<span className={styles.content_spam_colon}>: </span>
						</span>
						{product.name}
					</h3>
					<div className={styles.content_ProductItem_categoryName}>
						<span className={styles.content_span_category}>
							{' '}
							категория
							<span className={styles.content_span_colon}>: </span>
						</span>
						{category ? category.name : null}
					</div>
					<ProductRating product={product} idProduct={product.id} />
					<div className={styles.content_ProductItem_prise}>
						<span className={styles.content_span_price}>
							цена
							<span className={styles.content_span_colon}>: </span>
						</span>
						{product.prise}
						<span className={styles.content_ProductItem_RUB}> руб</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
