import axios from 'axios';
import Cookies from 'js-cookie';
import { IAuthResponse } from 'store/user/user.interface';
import { getContentType } from 'app/api.helper';
import { saveToStorage } from './auth.helper';
import { IEmailPassword } from 'store/user/user.interface';
import { instance } from 'app/api.interceptor';

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
async main(type:'login' | 'registr', data: IEmailPassword){
  //instance = axios.create  baseURL:,  headers: 'Content-Type':'application/json'
  // IAuthResponse (id: , name: , email: , avatarPath: , phone:  и  accessToken , refreshToken)
const response = await instance<IAuthResponse>({
 url:`/auth/${type}`,
 method: 'POST',
 data: data   
})

// saveToStorage Запись  в общий localStorage
if(response.data.accessToken) saveToStorage(response.data)
return response.data
},

  // ............................................  
async getNewTokens(){
//   
const refreshToken = Cookies.get('refreshToken');

// Делаю запрос с axios и указываю какие данные будут отправляться  
// IAuthResponse:  user: IUser,  accessToken: string ,refreshToken: string 
const response = await axios.post<string,{data: IAuthResponse}>(
 process.env.SERVER_URL + '/auth/login/access-tocen',
 // Передаю refreshToken в dody 
 {refreshToken},
 // Передаю headers в  getContentType()
 {headers: getContentType()}   
)
// Если accessToken пришёл то его записываю в  saveToStorage
if(response.data.accessToken) saveToStorage(response.data)

return response
}

};



//3:11 
