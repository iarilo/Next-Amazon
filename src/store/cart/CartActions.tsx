import { FC } from 'react'
import { useActionsRedux, useCart } from 'store/hooks-reduxer/hooks-redux'
import { ICartItem } from 'types/cart.interface'
import styles from './page.module.css'
import { GiTrashCan } from "react-icons/gi";



// CartActions кнопки + , - , input , delete
const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart, changeQiantity } = useActionsRedux()

	const { items } = useCart()
	const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity

    function handleChange(this: any, e:any) {
        this.size=Math.max(e.target.value.length, 1)
    }
	return (
		<div className={styles.container_CartActions} >
			<h6 style={{color:'#000000',margin:'0'}}  > CartActions </h6>
			<div className={styles.container_CartActions_button} >
				<button
					onClick={() => changeQiantity({ id: item.id, type: 'minus' })}
					disabled={quantity === 1}
                    className={styles.container_CartActions_button_minus}
					// > <FiMinus/> </button>
				>
					
					-
				</button>

				<input
                  type='text' 
                  disabled readOnly value={quantity}
                  size={quantity} 
                //   onInput={handleChange}
                  className={styles.container_CartActions_input}
                  
                  />

				<button
					onClick={() => changeQiantity({ id: item.id, type: 'plus' })}
                    className={styles.container_CartActions_button_plus}
					//> <FiPlus/> </button>
				>
					
					+ 
				</button>

				<button 
                onClick={
                    () => removeFromCart({ id: item.id })
                 }
                 className={styles.container_CartActions_button_delete}
                >
					{/* <FiTrash/>  </button>    */}
					<GiTrashCan />
				</button>
			</div>
		</div>
	)
}

export default CartActions
