'use client'
import React, { FC } from 'react'
import { useActionsRedux, useCart } from 'store/hooks-reduxer/hooks-redux'
import { IProduct } from 'types/product.interface'
import { TfiShoppingCartFull, TfiShoppingCart } from 'react-icons/tfi'
import { ICartItem } from 'types/cart.interface'
import styles from './page.module.css'

const AddToCardButton: FC<{ product: IProduct; productId: number }> = ({
	product,
	productId,
}) => {
	const { addToCart, removeFromCart } = useActionsRedux()
	const { items } = useCart()


	const currentElement = items.some(
		(cartItem: ICartItem) => cartItem.product.id === productId,
	)
	//console.log('currentElement =',currentElement)


	const handleClick = () => {
	
	         	addToCart({
					product:product,
					quantity: 1,
					prise: product.prise,
				});
				
			//console.log('Click !!!')
	};

	return (
		<div>

<button onClick={handleClick} className={styles.AddToCardButton}>
    {currentElement ? <TfiShoppingCartFull /> : <TfiShoppingCart />}
	
</button>

   {/* -------------------------------- */}
			{/* <button
      onClick={()=> 
        currentElement
        // проверяю на наличие в корзине продуктов и если они там есть, то удаляю
		? removeFromCart({id: productId})
		// А если продуктов нет то тогда передаю  объект { product: product,  quantity:1, prise: product.prise } в cart.slice.ts -> action.payload -> и заливаю его в  state.items.push   
		: addToCart({
			product: product,
			quantity:1,
			prise: product.prise
		})
	}
	className={styles.AddToCardButton}
	>
		 
      {currentElement? <TfiShoppingCartFull /> : <TfiShoppingCart />}
      </button> */}

 {/* ------------------------------------------ */}
  {/* <button
			  onClick={() =>
				  addToCart({
					  product: product,
					  quantity: 1,
					  prise: product.prise,
				  })
			  }
			  className={styles.AddToCardButton}
		  >
			  {currentElement ? <TfiShoppingCartFull /> : <TfiShoppingCart />}
		  </button> */}


		</div>
	)
}

export default AddToCardButton
