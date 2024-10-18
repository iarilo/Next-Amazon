"use server"
import React, { FC, PropsWithChildren } from 'react'
import { cookies } from 'next/headers'
//import styles from './page.module.css'

export async function dinamRoutCookies() {
	//return cookies().get('accesToken')?.value || ''
	try {
		const token = cookies().get('accesToken')?.value;
		return token || null
	} catch (error) {
		console.error('Ошибка при получении токена cookie:', error)
		return null
	}
}
const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	dinamRoutCookies()
	return <main> {children} </main>
}

export default Layout
