import React,{FC} from 'react';
import {IconType} from 'react-icons';
import styles from './page.module.css'

interface ISquareButton {
   Icon: IconType
   onClick?: ()=> void
   number?: number 
}
// Icon: иконка корзины ,onClick:функция клика на корзину,number: колличество товаров из HeaderCart}
const SquareButton:FC<ISquareButton> = ({Icon,onClick,number}) => {

  return (
    <div className={styles.container_SquareButton} >
        <h6 style={{color:'#ffffff',margin:'0'}}  >SquareButton</h6>
     <button 
     onClick={onClick}
     className={styles.container_SquareButton_button}
     >
      {!!number && (
        <span>{number}</span>
      )}
      <Icon/>  

     </button>

    </div>
  )
}

export default SquareButton