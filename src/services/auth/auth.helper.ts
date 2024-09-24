
import Cookies from 'js-cookie';
import cookie from 'cookie'; // for server
import { IAuthResponse, ITokens, ITokensServer } from 'store/user/store-user.interface'
import { NextRequest } from 'next/server';



export   async function  arrayToken(data: ITokens) {
	const Array: ITokens[] = Object.values(data)
	const accesToken = Array.map((token: ITokens) => token.accesToken)
	const refreshToken = Array.map((token: ITokens) => token.refreshToken)
	const { userI } = data

	return { accesToken, refreshToken, userI }
}

// Запись токена клиент
export const saveTokenStorage = async (data: ITokens) => {
	console.log('saveTokenStorage - accesToken =',data)

	const tokensArray = await arrayToken(data)
	const { accesToken, refreshToken } = tokensArray
	Cookies.set('accesToken', accesToken.join(''))
	Cookies.set('refreshToken', refreshToken.join(''))
}



// Запись  в общий localStorage
//  IAuthResponse:  user: IUser,  accessToken: string ,refreshToken: string
export const saveToStorage = async (data: IAuthResponse) => {
	//console.log('SaveToStorage-Data = ',data)
	   await saveTokenStorage(data)
	  localStorage.setItem('userLoc', JSON.stringify(data.userI))
}

// Получение токена клиент
export const getAccessToken = async () => {
	const accesToken = Cookies.get('accesToken')
	//console.log('getAccessToken - accesToken =',accesToken)
	return accesToken || null
}

// Получаю пользователя из Хранилища
export const getUserFromStorage = async () => {
	return JSON.parse(localStorage.getItem('userLoc') || '{}')
}

// --------------- Сервер  --------------
// Запись токена сервер
/*
export const setCookiesOnServer = (res: { setHeader: (arg0: string, arg1: string[]) => void; }, tokens: ITokensServer) => {
    const { accesToken, refreshToken } = tokens;
    res.setHeader('Set-Cookie', [
        cookie.serialize('accesToken', accesToken.join(''), { 
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: '/' 
        }),
        cookie.serialize('refreshToken', refreshToken.join(''), { 
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: '/' 
        })
    ]);
};

// Получение токена сервер


 export const getCookiesFromServer = (req: { headers: { cookie: any; }; }) => {
//export const getCookiesFromServer = (req:NextRequest) => {
    const cookies = cookie.parse(req.headers.cookie || '');
    return {
        accesToken: cookies.accesToken || null,
        refreshToken: cookies.refreshToken || null
    };
};

//console.log('getCookiesFromServer =',getCookiesFromServer() )

//

*/

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
