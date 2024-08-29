import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from 'app/api.helper'
import { IAuthResponse, IEmailPassword } from './store-user.interface'
import { removeFromStorage } from 'services/auth/auth.helper'
import { AuthService } from 'services/auth/auth.service'
import { AppDispath, RootState } from 'store/store'
import { IUserData } from 'types/type-user.interface'


const createAppAsyncThunk = createAsyncThunk.withTypes<{
	state: RootState
	dispatch: AppDispath
	rejectValue: string
	extra: { s: string; n: number }
	
  }>()

// Функции  выполняют асинхронных запрос на сервер и обрабатываются в slice

/* register */
// <IAuthResponse, IEmailPassword> то что передаётся в   data
//export const register = createAsyncThunk < IAuthResponse, IEmailPassword>(
export const register = createAppAsyncThunk < IAuthResponse, IUserData>(
	'auth/register', // Название
	async (data, thunkApi) => {
		// data: Отправляю данные на  email и password на сервер
	   //response: Получаю acssesToken и refrashToken и user с сервера
		try {
			const response = await AuthService.main('register', data)
			return response
		} catch (error: string | any) {
			return thunkApi.rejectWithValue(error)
		}
	},
)
// Делает запрос на сервер
export const login = createAsyncThunk<IAuthResponse, IUserData>(
	'/auth/login',// Название
	async (data, thunkApi) => {
		try {
		// data: Отправляю данные на  email и password на сервер
	   //response: Получаю acssesToken и refrashToken и user с сервера
			const response = await AuthService.main('login', data)
    	return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	},
)

/* logout  удаляет все coocie  и данные из localStorage */
export const logout = createAsyncThunk('auth/login', async () => {
	removeFromStorage()
})

/* checkAuth  проверка авторизиции и получение новых токенов */
export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',  // Название
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
			
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(error)
		}
	},
)

//3:40