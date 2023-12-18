import Cookies from 'js-cookie';
import { IAuthResponse, ITokens } from 'store/user/user.interface';


/*
// Запись токена
export const saveTokenStorage = () => {};
//   Запись  в общий localStorage :
export const saveToStorage = () => {};
// Получение токена
export const getAccessToken = async()=>{};
// Получаю пользователя из Хранилища
export const getUserFromStorage = async () => {};
// Удаление токена
export const removeFromStorage = () => {}
*/

// Запись токена
export const saveTokenStorage = (data: ITokens) => {
    //Set() : создает новый объект set.
    // ITokens типы accessToken  и  refreshToken
Cookies.set('accesssToken', data.accessToken)
Cookies.set('refreshToken', data.refreshToken)
};

// Запись  в общий localStorage
//  IAuthResponse:  user: IUser,  accessToken: string ,refreshToken: string
export const saveToStorage = (data: IAuthResponse) => {
    // Запись токена   
   saveTokenStorage(data)
   // Запись user
   localStorage.setItem('user', JSON.stringify(data.user))
   };

   // Получение токена
export const getAccessToken = async()=>{
const accessToken = Cookies.get('accessToken')
return accessToken || null;
};

// Получаю пользователя из Хранилища
export const getUserFromStorage = async () => {
    return JSON.parse(localStorage.getItem('user') || '{}')
}
// Удаление токена
export const removeFromStorage = () => {
 Cookies.remove('accesssToken')
 Cookies.remove('refreshToken') 
 localStorage.removeItem('user')  
};




