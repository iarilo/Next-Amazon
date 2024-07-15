import axios from 'axios';
import Cookies from 'js-cookie';
import { IAuthResponse } from 'store/user/store-user.interface';
import { getContentType } from 'app/api.helper';
import { removeFromreRreshToken, saveToStorage } from './auth.helper';
import { IEmailPassword } from 'store/user/store-user.interface';
import { instance } from 'app/api.interceptor';
import { IUserData,IUser } from 'types/type-user.interface';


/*
export const AuthService = {
async main(){},
  // ............................................  
async getNewTokens(){}
};
*/

 export const AuthService = {
  // Сервис отвечающий за авторизацию и логин
  //  IEmailPassword  email: string, password: string
async main(type:'login' | 'register', data: IUserData){
  //instance = axios.create  baseURL:,  headers: 'Content-Type':'application/json'
  // IAuthResponse (id: , name: , email: , avatarPath: , phone:  и  accessToken , refreshToken)
  
const response = await instance<IAuthResponse>({
 url:`/auth/${type}`,
 method: 'POST',
 data: data   
 })
// saveToStorage Запись  в общий localStorage
// console.log('Action.server_Login-Data: ',data)
 //console.log('Action.server_Login-response: ',response)
// console.log('Action.server_Login-response-Data: ',response.data)


 const token = Object.values(response.data)
 const acces = token.map((ell)=> ell.accesToken )
if(acces) saveToStorage(response.data)

return response.data
},

  // ............................................  
  // Формирую запрос  для создания access-tocen
async getNewTokens(){
// Получаю  refreshToken 
const refreshToken = Cookies.get('refreshToken');

// Отправляю данные data:IAuthResponse " Ответ аутентификации   IUser  " 
const response = await axios.post<string,{data:IAuthResponse}>(
 // Указываю полную строку на метод создания access-tocen , на бэкэнде
process.env.SERVER_URL + '/auth/login/access-tocen',
// Передаю refreshToken в body
{refreshToken},
// Type json для headers
{headers: getContentType()}
)

 const arrayToken =  Object.values(response.data)
 const acces = arrayToken.map((ell)=> ell.accesToken )
 //console.log('Main-getNewTokens-Acces: ',acces)
// Ели accessToken пришёл записываю его в localStorage
if (acces) 
 { saveToStorage(response.data)}



  return response

  },
  async createUser(data:string){
  //  const dataUser = JSON.parse(data)
  //  console.log('Data-user: ',dataUser)
 try {
  const response = await axios.post<string,{data:IAuthResponse}>(
    process.env.SERVER_URL + '/auth/register',
    data,
    {headers: getContentType()}
);
if(!response.data){
  console.log("данные из формы не пришли") 
}  


return response
 } catch (error) {
  console.log(error)
 }

  },
  async getProfileUser(){
   const Profile = await instance<IUser>({
    url:'/auth/all',
    method:'GET',
    
   })
   
   return Profile.data
   
  }

 };




//3:11 
