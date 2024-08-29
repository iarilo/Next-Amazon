import axios from 'axios'
import { errorCatch, getContentType } from './api.helper'
import { getAccessToken, removeFromStorage } from 'services/auth/auth.helper'
import { AuthService } from 'services/auth/auth.service';

/*
export const instance = ''
// interceptors  перехватчики
// instance
*/

export const axiosOptions = {
	baseURL: process.env.SERVER_URL,
	headers: getContentType(),
}

export const axiosClassic = axios.create(axiosOptions )

export const instance = axios.create(axiosOptions )

instance.interceptors.request.use( async (config) => {
	
	const accesToken = await getAccessToken()
	if (config && config.headers && accesToken) {
		config.headers.Authorization = `Bearer ${accesToken}`
	}
 //console.log('interceptors.request - accesToken = ',accesToken)
	return config
})

instance.interceptors.response.use(
	//config => config,
	async config => {
		//await AuthService.getNewTokens()
	
		return config
	},

	async error => {
	
			// Записываю оригинальный запрос
		const originalRequest = error.config
		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt expired') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true

			try {
				//console.log('interceptors-RESPONSE-AuthService')
				await AuthService.getNewTokens()
				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeFromStorage()
			}
		}
		throw error
	},
)

/*
// interceptors request  Ищю токен и  прикрипляю его
// метод  use   указывает путь 
// app.use создаёт ([путь,] обратный вызов [, обратный вызов ...])

// При запросе  прикрепляю Bearer токен
instance.interceptors.request.use(async (config) => {
	const accessToken = getAccessToken() // const accessToken = Cookies.get('accessToken')

	    // && логический оператор
	// Если config существует и существует  config.headers а также 	accessToken
	if (config && config.headers && accessToken) 
		config.headers.Authorization = `Bearer ${accessToken}`
	

	return config
})

//  interceptors response ищю ошибку и обновляю токен
// сокрощёная стрелочная функция где config озврощает config

// При ответе обноляю  Bearer токен
instance.interceptors.response.use(
	config => config,
	async error => {
		// Записываю оригинальный запрос  из error.config которые выше
		const originalRequest = error.config

		if (
			//Если ошибка 401 ИлИ
			(error.response.status === 401 ||
				//  ошибка jwt expired ИлИ
				errorCatch(error) === 'jwt expired' ||
				//  ошибка jwt must de provider ИлИ
				errorCatch(error) === 'jwt must de provider') &&
			// И присутствует error.config originalRequest
			error.config &&
			// И это не повтор  // _isRetry(это повторная попытка)
			!error.config._isRetry
		) {
			// Проверяю на повтор и записываю _isRetry = true, что бы действие не повторялось
			originalRequest._isRetry = true

			try {
				// getNewTokens() Файл из auth.service.ts,
				await AuthService.getNewTokens()
				// Получаю новый токен
				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired')
					// Очищаю токен
					removeFromStorage()
			}
		}
		throw error
	},
)
*/

// 3:06
