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
        {/* <h6 style={{color:'#ffffff',margin:'0'}}  >SquareButton</h6> */}
     <button 
     onClick={onClick}
     className={styles.container_SquareButton_button}
     >
      {!!number && (
        <span>{number}</span>
      )}
      <Icon/>  

      {/* 
      
    Если number имеет "истинное" значение (например, не равно 0, null, undefined, false, пустой строке или NaN), то !!number станет true.
    Если number имеет "ложное" значение (например, 0 или null), то !!number станет false.   
     Таким образом, !!number проверяет, есть ли у вас значение для number. 
    Если оно существует и является истинным, будет отображаться <span>{number}</span>, 
        в противном случае этот элемент не будет отрендерен.

      */}

     </button>

    </div>
  )
}

export default SquareButton