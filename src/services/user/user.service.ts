import { instance } from "app/api.interceptor";
import { IUser,IUserData  } from "types/user.interface";

const USER = 'user'

export const UserService = {

    async userProfile(){
     return instance<IUser>({
        url: `${USER}/profile`,
        method: 'GET'
     }) 
    },

    async updateProfile(data: IUserData ){
     return instance<IUser>({
      url: `${USER}/profile`,
      method: 'PUT',
      data: data  
     })
    },

    async productUser(){
     return instance<IUser>({
        url: `${USER}/product`,
        method: 'GET'
     })   
    },

    async toggleFavorite ( productId: number | string) {
     return instance<IUser>({
     url: `${USER}/profile/favorites/${productId}`,
     method:'PATCH'   
     })
    }

}


// 3:22