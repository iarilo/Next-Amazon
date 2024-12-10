import Button from '@/ui/Button'
import type { Metadata } from 'next'
import React, { FC } from 'react'
import CheckRolle from 'store/providers/auth-provider/CheckRolle'

export const metadata: Metadata = {
	title: 'AuthComponents',
	description: 'фронтэнд amazon  на next',
}

const Auth: FC = () => {
   console.log('Auth  ess')
	return (
		<CheckRolle  allowedRoles = {"admin"}>
			<div>
				<h3 style={{ color: 'red' }}>Auth </h3>
				<Button variant='white'>auth</Button>
			</div>
		</CheckRolle>
	)
}

export default Auth
// 4;14
