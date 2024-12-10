'use client'
import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import store, { persiStor } from 'store/store'
import AuthProvider from './auth-provider/AuthProvider'
import styles from './page.module.css'
import CheckRolle from './auth-provider/CheckRolle'

const queryClient = new QueryClient({
	// Отключаю переобновление при фокусе окна
	defaultOptions: {
		queries: { refetchOnWindowFocus: false },
	},
})

export function ReduxProvider({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persiStor}>
					<AuthProvider>
						<div className={styles.container_ReduxProvider}>{children}</div>
					</AuthProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
// 3:45 - 3:59   , { Component }
