'use server'
import axios from 'axios'
import { ITokens } from 'store/user/store-user.interface'
import { cookies } from 'next/headers'
import { cookieGet } from './cookie.server'
import { parse } from 'cookie'
import { errorCatch, getContentType } from 'app/api.helper'
import { AuthService } from 'services/auth/auth.service'
import { removeFromStorage } from 'services/auth/auth.helper'

export async function createServerCookie(data: ITokens) {
	const createCookies = cookies()
	const allObject = Object.values(data)
	const accesToken = allObject.map((ell: ITokens) => ell.accesToken)
	const refreshToken = allObject.map((ell: ITokens) => ell.refreshToken)

	//console.log('createServerCookie - accesToken =', accesToken)

	createCookies.set({
		name: 'accesToken',
		value: accesToken.join(''),
	})
	createCookies.set({
		name: 'refreshToken',
		value: refreshToken.join(''),
	})
}

export async function getCookiesToken() {

	try {

		const token = cookies().get('accesToken')?.value;
		//const token = await cookieGet()
		console.log('getCookiesToken() =', token)
		return token || null
	} catch (error) {
		console.error('Ошибка при получении токена cookie:', error)
		return null
	}
}



// -------------------------------------

export async function getServerSideProps(context: { query?: any; req?: any }) {
	// Получаем cookies из заголовков запроса
	const { req } = context
	const cookies = req.headers.cookie || ''
	// Парсим cookies
	const parsedCookies = parse(cookies)
	// Получаем cookie по имени
	const myCookie = parsedCookies.myCookie || null
	// Получаем параметр из динамического маршрута
	const { id } = context.query
	return {
		props: {
			myCookie,
			postId: id,
		},
	}
}

/*
  export default function PostPage({ myCookie, postId }) {
	return (
	  <div>
		<h1>Post ID: {postId}</h1>
		<p>My Cookie: {myCookie}</p>
	  </div>
	);
  }

*/
//-----------------------------------
