import { IUser } from "types/user.interface"

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
    email: string
    isAdmin: boolean
};
//Токены
export interface ITokens {
    accessToken: string
    refreshToken: string
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
     user: IUser
};


