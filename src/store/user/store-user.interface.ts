import { IUser } from "types/type-user.interface"

/*
//  Состояние пользователя	
export interface IUserState {};
//Токены
export interface ITokens {}
//Начальное состояние при загрузки
export interface IInitialState {};
// Емэйл и пароль 
export interface IEmailPassword{};
 // Ответ аутентификации
export interface IAuthResponse  {};
*/


//  Состояние пользователя	
export interface IUserState {
    id:number
    email: string
    isAdmin: boolean
};
//Токены
export interface ITokens {
    accesToken: string
    refreshToken: string
    userI: IUser
};
//  Начальное состояние при загрузки
export interface IInitialState {
   
    user: IUserState | null
    isLoading: boolean
};
// Емэйл и пароль 
export interface IEmailPassword{
    email: string
    password: string
};
 // Ответ аутентификации
export interface IAuthResponse extends ITokens{
     userI: IUser
};


