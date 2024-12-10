import { instance } from "app/api.interceptor";
import { IFullUser, IUser,IUserData  } from "types/type-user.interface";

const USER = '/user'

export const UserService = {

    async userProfile(){
     const profile = await instance<IFullUser>({
        url: `${USER}/profile`,
        method: 'GET'
     }) 

     //console.log('Profile=',profile.data.id)
     return  profile
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