"use client"
import React,{FC} from 'react';
import { useProfile } from 'store/hooks-reduxer/hooks-redux';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserService } from 'services/user/user.service';
import { IUser } from 'types/type-user.interface';
import  styles  from './page.module.css';





const FavoriteButton: FC<{productId: number}>  = ({productId}) => {
  //Хук useQueryClient возвращает текущий экземпляр QueryClient 
  const useClient = useQueryClient()

// ToggleFavorite  обновляет данные в favorites
  async function ToggleFavorite(productId:number) {
    const res = await UserService.toggleFavorite(productId)
    return res.data
   }
  // https://www.basedash.com/blog/understanding-invalidatequeries-in-react-query
    const {mutate} = useMutation<IUser,Error,number>({
      mutationKey:['togle favorite'],
      mutationFn: (productId:number) => ToggleFavorite(productId),
      //onSuccess Успех
      // queryKey:['get profile']  ключ из   useProfile( useQuery() который получает profile )
      onSuccess:() => {
        // invalidateQueriesфункция, которая позволяет вам вручную или автоматически аннулировать и повторно запрашивать определенные запросы.
         useClient.invalidateQueries({ queryKey:['get profile']})
      } 
  })

  // useProfile() получает данные user с полем favorites
  const {profile} = useProfile()
    if(!profile) {return null}
  const {favorites} = profile.data
   
  //console.log('FavoriteButton - Profile = ', profile.data)
  // console.log('FavoriteButton - favorites = ', favorites)
  // console.log('ProductId = ', productId)
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




