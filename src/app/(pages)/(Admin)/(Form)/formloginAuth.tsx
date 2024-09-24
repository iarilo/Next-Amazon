'use client'
import React, { FormHTMLAttributes, useState,FC, PropsWithChildren } from 'react'
import styles from './page.module.css'
import { useActionsRedux, useAuth } from 'store/hooks-reduxer/hooks-redux'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '@/ui/Button'
import Heading from '@/ui/Heading'
import Field from '@/ui/input/Field'
import { validEmail,passwordRegex } from '@/screens/auth/valid-email'
import { IUserData } from 'types/type-user.interface'
import { useAuthRedirect } from '@/screens/auth/useAuthRedirect'



interface IForm extends FormHTMLAttributes<HTMLFormElement>{
variant: 'orange' | 'white' 
props: 'orange' | 'white'
}



const FormloginAuth:FC<PropsWithChildren<IForm>>  = ({className,props}) => {
		
	const { isLoading } = useAuth()
	const { login, register } = useActionsRedux()
	const [type, setType] = useState<'login' | 'register'>('register')
	
	const [dataRedirect, setData] = useState<IUserData>()
	if(dataRedirect) useAuthRedirect()
	
	console.log("Type-Login: ",type)
	
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IUserData>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IUserData> = (data,e) => {
	   e?.preventDefault()
		if (type === 'login')  {
			login(data)
		} 
		 else {
			register(data)
		}
	 reset()
		
	}

	enum FlexDirection {
		Column = 'column',
		Row = 'row',
	  }
	  
	  // Компонент
		const fieldStyles: React.CSSProperties = {
		  display: 'flex',
		  flexDirection: FlexDirection.Column, // использование enum для flexDirection
		  width: '50%',
		  alignItems: 'center',
		  fontSize: '12px',
		  color: props === 'orange' ? 'orange' : 'white',
		};
/*
		const fieldInput: React.CSSProperties = {
			fontSize: '12px',
			border: props === 'orange' ? '1px solid orange' : ' 1px solid white',
		  };
*/

	return (
		<div className={styles.container}>
			<form 
			onSubmit={handleSubmit(onSubmit)}
			className={className}
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '5px',				
			    backgroundColor:props ===  'orange' ? 'white' : 'orange',
				padding:'20px 0px',   	
			}}
			
			>
				<Heading variant={props}>Логин</Heading>
				
			
				<Field
					{...formRegister('email', {
						required: 'email не валидный',
						pattern: {
							value: validEmail,
							 message: 'email не валидный',
						},
					})}
                    id='login_email'
					type='email'
					placeholder='email'
					style = {{... fieldStyles }}
					error={errors.email?.message}
				/>
			
				
				<Field
					{...formRegister('password', {
						required: 'pasword не валидный',
						pattern: {
							value: passwordRegex,
							message: 'password не валидный',
						},
					})}
					// type='password'
                    id='login_password'
					type='text'
					placeholder='password'
					style = {{...fieldStyles }}
				    error={errors.password?.message}
				/>
				<div className={styles.container_btn} >
                <div className={styles.container_btn_login_register}>
               <button 
               className={styles.btn_login_register}
                type='button'
                 onClick={
                    ()=> setType(type === 'login' ? 'register' : 'login')
                 }> 
                  {type === 'login' ? 'register' : 'login'}
                </button>
               </div>
				<Button variant={props}>отправить</Button>
              
				</div>
			</form>
		</div>
	)
}

export default FormloginAuth