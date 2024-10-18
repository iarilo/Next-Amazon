"use client"
import React from 'react';
import { useOutside } from 'custom-hooks/useOutside';
import { useCart } from 'store/hooks-reduxer/hooks-redux';
import SquareButton from '../SquareButton';
import { RiShoppingCartLine } from "react-icons/ri";
import CartItem from 'store/cart/CartItem';
import Button from '../Button';
import styles from '../page.module.css';

// Иконка корзины  в hedar
const Cart = () => {
const {isShow,setIsShow,ref} = useOutside(false)
//  items  выбранный товар
const {items,total} = useCart()


 //console.log('Cart-items = ',items)
// console.log('Cart-total = ',total)
 

  return (
    <div className={styles.container_Cart} >
      <h6 style={{color:'#ffffff',margin:'0'}} >HeadarCart</h6>
      {/* SquareButton  число товаров и иконка на кнопки корзины */}
      <SquareButton
      Icon={RiShoppingCartLine}
      //перключаю  isShow с false  на  true 
      onClick={()=> { setIsShow(!isShow)}}
      number={items.length}
      />

        <div ref={ref}  className= {isShow?  styles.openMenu :  styles.closeMenu} >
        {/* <div  > */}
  
        <span style={{fontSize:'14px', fontWeight:'bold'}} > My cart</span>

        <div  className={styles.container_Cart_CartItem} >
          {/* CartItems   картинки выбраного товара */}
          {items.length?(
            items.map((item)=> <CartItem item={item} key={item.id}/> )
          ) : (
            <span style={{fontSize:'14px', fontWeight:'bold'}} >Корзина пуста</span>
          )}
        </div>

        <div  className={styles.container_Cart_convertPrice} >
          <span style={{fontSize:'14px', fontWeight:'bold'}} >
              Total:
                <span>
                   {/* {convertPrice(total)} */}
                    {total} руб
               </span>
          </span>
          {/* <div>{convertPrice(total)}</div> */}
        </div>

        <div className={styles.container_Cart_Button} >
          <Button variant='white' >
            Place order
          </Button>
        </div>




        </div>
    </div>
  )
}

export default Cart