import React, { FC } from 'react'
import CartActions from './CartActions'
import { ICartItem } from 'types/cart.interface'
import Image from 'next/image'
import { convertPrice } from 'utils/convertPrice'
import styles from './page.module.css'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	// item все выбраные продукты
	return (
		<div className={styles.container_CartItem}>
			<h6 style={{ color: '#000000', margin: '0' }}>CartItem</h6>

			<div className={styles.container_CartItem_content}>
				<div className={styles.container_CartItem_Image}>
					<Image
						src={item.product.images[0]}
						width={50}
						height={50}
						alt={item.product.name}
					/>
				</div>
				<div className={styles.container_CartItem_convertPrice_CartActions}  >
					<CartActions item={item} />

					<div className={styles.container_CartItem_convertPrice_text}   >
						<span style={{ fontSize: '12px', fontWeight: 'bold' }}>
							{item.product.name}:{' '}
						</span>
						<span style={{ fontSize: '12px', fontWeight: 'bold' }}>
							{convertPrice(item.product.prise)}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem
