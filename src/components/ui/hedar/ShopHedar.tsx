
import styles from '../page.module.css';
import Link from 'next/link';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import HeaderProfile from './HeaderProfile';
import HeadarCart from './HeadarCart';
import Search from '../Search/Search';



const ShopHedar = () => {
  return (
    <div className={styles.container_ShopHedar}  >
        <h4 style={{margin:'0', color:'#ffffff'}} > ShopHedar </h4>
        <div className={styles.container_ShopHedar_content}  >
            <Search/>
        <div className={styles.container_ShopHedar_button}  >
            <Link href='/favorites'> <AiFillHeart/> </Link>
             <HeadarCart/> 
            <HeaderProfile/>
        </div>

         </div>

    </div>
  )
}

export default ShopHedar