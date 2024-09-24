"use client"
import { Metadata } from "next";
import { useProfile } from "store/hooks-reduxer/hooks-redux";
import { NextPageAuth } from "store/providers/auth-provider/auth-page.types";
import Catalog from "@/ui/catalog/Catalog";




const FavoritesPage:NextPageAuth = () => {
  const {profile} = useProfile()
  
  return (
    <div  style={{backgroundColor:'#ffffff', width:'100%'}}  >
      <h4 style={{color:'red'}} > favorites</h4>
        <Catalog catalogProducts={profile?.data.favorites || []} />
    </div>
  )
}
FavoritesPage.isOnlyUser = true //только для авторизированного пользователя
export default FavoritesPage 
