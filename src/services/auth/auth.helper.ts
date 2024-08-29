import Cookies from 'js-cookie'
import { IAuthResponse, ITokens } from 'store/user/store-user.interface'

export function arrayToken(data: ITokens) {
	const Array: ITokens[] = Object.values(data)
	const accesToken = Array.map((token: ITokens) => token.accesToken)
	const refreshToken = Array.map((token: ITokens) => token.refreshToken)
	const { userI } = data

	return { accesToken, refreshToken, userI }
}



// Запись токена
export const saveTokenStorage = async (data: ITokens) => {
	const tokensArray = arrayToken(data)
	const { accesToken, refreshToken } = tokensArray
	Cookies.set('accesToken', accesToken.join(''))
	Cookies.set('refreshToken', refreshToken.join(''))
}

// Запись  в общий localStorage
//  IAuthResponse:  user: IUser,  accessToken: string ,refreshToken: string
export const saveToStorage = async (data: IAuthResponse) => {
	//console.log('SaveToStorage-Data = ',data)
	saveTokenStorage(data)
	localStorage.setItem('userLoc', JSON.stringify(data.userI))
}

// Получение токена
export const getAccessToken = async () => {
	const accesToken = Cookies.get('accesToken')
	//console.log('getAccessToken - accesToken =',accesToken)
	return accesToken || null
}

// Получаю пользователя из Хранилища
export const getUserFromStorage = async () => {
	return JSON.parse(localStorage.getItem('userLoc') || '{}')
}

// Удаление токена
export const removeFromStorage = () => {
	Cookies.remove('accesToken')
	Cookies.remove('refreshToken')
	localStorage.removeItem('user')
}

export const removeFromreRreshToken = () => {
	Cookies.remove('refreshToken')
}

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

/*
// Запись токена
export const saveTokenStorage = (data: ITokens) => {
	//Set() : создает новый объект set.
	// ITokens типы accessToken  и  refreshToken
	Cookies.set('accesssToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

// Запись  в общий localStorage
//  IAuthResponse:  user: IUser,  accessToken: string ,refreshToken: string
export const saveToStorage = (data: IAuthResponse) => {
	// Запись токена
	saveTokenStorage(data)
	// Запись user
	localStorage.setItem('user', JSON.stringify(data.userI))
}

// Получение токена
export const getAccessToken = async () => {
	const accesssToken = Cookies.get('accesssToken')
	return accesssToken || null
}

// Получаю пользователя из Хранилища
export const getUserFromStorage = async () => {
	return JSON.parse(localStorage.getItem('user') || '{}')
}
// Удаление токена
export const removeFromStorage = () => {
	Cookies.remove('accesssToken')
	Cookies.remove('refreshToken')
	localStorage.removeItem('user')
}


*/
