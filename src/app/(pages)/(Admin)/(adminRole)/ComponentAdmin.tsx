'use client'
import React, { useState, useEffect } from 'react'
import style from '../admin/page.module.css'
import {useActionsRedux,useAuth,useTupedSelector,} from 'store/hooks-reduxer/hooks-redux'
import { useRouter } from 'next/navigation'
import FormloginAuth from '../(Form)/formloginAuth'
import CheckRolle from 'store/providers/auth-provider/CheckRolle'

const ComponentAdmin= () => {
  const { login,logout } = useActionsRedux()
	const router = useRouter()
	const select = useTupedSelector(ell => ell.userStor)
	const userData = useAuth()

	const userId = select.user?.id
	const userEmail = select.user?.email

 // console.log('Select =',select)
  //console.log('userData =',userData)



	return (
		// <CheckRolle allowedRoles = {'admin'}>
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

         <button
		  style={{
			 backgroundColor:'blue',
			 color:'#ffffff',
			 border:'none',
			 borderRadius:'5px',
			 padding:'5px',
			 margin:'10px 0'
			}}
		     onClick={()=> {
		    	logout(),
			   router.push('/') 
			}} 
		  >
			выйти
		 </button>

			</div>
		</div>

		// {/* </CheckRolle> */}
	)
}

export default ComponentAdmin