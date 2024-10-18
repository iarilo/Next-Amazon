import { FC } from 'react'
import { useActionsRedux, useCart } from 'store/hooks-reduxer/hooks-redux'
import { ICartItem } from 'types/cart.interface'
import styles from './page.module.css'
import { GiTrashCan } from "react-icons/gi";



// CartActions кнопки + , - , input , delete
const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	
	const { removeFromCart, changeQiantity } = useActionsRedux()

	const { items } = useCart()
	const quantityItems = items.find(cartItem => cartItem.id === item.id)?.quantity

    function handleChange(this: any, e:any) {
        this.size=Math.max(e.target.value.length, 1)
    }
	return (
		<div className={styles.container_CartActions} >
			<h6 style={{color:'#000000',margin:'0'}}  > CartActions </h6>
			<div className={styles.container_CartActions_button} >


	{/* Атрибут disabledявляется логическим атрибутом.
       Если он присутствует, то указывает, что кнопка должна быть отключена.
       Отключенная кнопка не может использоваться и на нее нельзя нажать.
       Атрибут disabledможет быть установлен так, чтобы пользователь не нажимал на кнопку, пока не будет выполнено какое-либо другое условие (например, установлен флажок и т. д.). Затем JavaScript может удалить отключенное значение и снова сделать кнопку нажимаемой. */}
				<button
					onClick={() => changeQiantity({ id: item.id, type: 'minus' })}
					disabled={quantityItems === 1}
                    className={styles.container_CartActions_button_minus}
					// > <FiMinus/> </button>
				>
				   -
				</button>

				<input
                  type='text' 
                  disabled readOnly value={quantityItems}
                  size={quantityItems} 
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
