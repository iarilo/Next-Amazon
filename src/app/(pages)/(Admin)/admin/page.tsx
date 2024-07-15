'use client'
import React, { useState, useEffect } from 'react'
import style from './page.module.css'
import {
	useActionsRedux,
	useAuth,
	useTupedSelector,
} from 'store/hooks-reduxer/hooks-redux'

const Admin = () => {
	const { login } = useActionsRedux()
	const select = useTupedSelector(ell => ell.user)
	const userData = useAuth()

	const userId = select.user?.id
	const userEmail = select.user?.email

	useEffect(() => {
		//login()
	}, [])

	return (
		<div className={style.admin}>
			<h3> Admin </h3>
			<p style={{ color: '#000000' }}>Данные пользователя</p>
			<p style={{ color: '#000000', width: '50%' }}>
				Данные пользователя получаю из redux, с помощью хука useSelector,
				который выдаёт данные содержащиеся в state.user
			</p>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					width: '18%',
				}}
			>
				<p style={{ color: 'blue', margin: '0' }}>
					Id: <span style={{ color: 'green' }}>{userId}</span>
				</p>
				<p style={{ color: 'blue', margin: '0' }}>
					Email: <span style={{ color: 'green' }}>{userEmail}</span>
				</p>
			</div>
		</div>
	)
}

export default Admin
