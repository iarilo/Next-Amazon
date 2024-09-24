import type { Metadata } from 'next'
import React from 'react'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '../store/providers/provider-redux'
import { PropsWithChildren } from 'react'
import NavBar from './NavBar'
import Saidbar from '@/ui/saidbar/Saidbar'

//import './globals.css'

const inter = Inter({ subsets: ['latin'] })

//  export const metadata: Metadata = {
// 	   	title: 'Амазон',
// 	    description: 'фронтэнд amazon  на next',
// };

export const metadata: Metadata = {
	icons: {
		icon: 'next/public/icons8-корзина-эмодзи-48.png',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning={true}>
			<body className={inter.className} suppressHydrationWarning={true}>
				<NavBar />
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	)
}
