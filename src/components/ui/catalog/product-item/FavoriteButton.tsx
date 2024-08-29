import React,{FC} from 'react';
import { useAuth, useProfile } from 'store/hooks-reduxer/hooks-redux';
import { IProduct } from 'types/product.interface';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { ICartItem } from 'types/cart.interface';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserService } from 'services/user/user.service';
import { IUser } from 'types/type-user.interface';
import  styles  from './page.module.css';





const FavoriteButton: FC<{productId: number}>  = ({productId}) => {

  const useClient = useQueryClient()
  async function ToggleFavorite(productId:number) {
    const res = await UserService.toggleFavorite(productId)
    return res.data
   }
  
    const {mutate} = useMutation<IUser,Error,number>({
      mutationKey:['togle favorite'],
      mutationFn: (productId:number) => ToggleFavorite(productId),
      onSuccess:() => {
         useClient.invalidateQueries({ queryKey:['get profile']})
      } 
  })

  const {profile} = useProfile()
    if(!profile) {return null}
  const {favorites} = profile.data
   
  //console.log('FavoriteButton - Profile = ', profile.data)
    //console.log('FavoriteButton - favorites = ', favorites)
  //  console.log('FavoriteButton - review = ',review )

  const isExist = favorites.some(
    favorite => favorite.id === productId
  )
  return (
    <div>
      <button 
       onClick={()=> mutate(productId)}
       className={styles.FavoriteButton }
       >
      {isExist? <AiFillHeart/> : <AiOutlineHeart/>}
      </button>
    </div>
  )
}

export default FavoriteButton




