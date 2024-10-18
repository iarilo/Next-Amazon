'use client'
import React, { FormHTMLAttributes, useState,FC, PropsWithChildren } from 'react'
import styles from './page.module.css'
import { useActionsRedux, useAuth } from 'store/hooks-reduxer/hooks-redux'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '@/ui/Button'
import Heading from '@/ui/Heading'
import Field from '@/ui/input/Field'
import { validEmail,passwordRegex,nameRegex,phone } from '@/screens/auth/valid-email'
import { IUserData } from 'types/type-user.interface'
import { useRouter } from 'next/navigation'


interface IForm extends FormHTMLAttributes<HTMLFormElement>{
variant: 'orange' | 'white' 
props: 'orange' | 'white'
}




const FormAuth:FC<PropsWithChildren<IForm>>  = ({className,props}) => {
	const router = useRouter()
	const { isLoading } = useAuth()
	const { login, register } = useActionsRedux()
	const [type, setType] = useState<'login' | 'register'>('register')
	
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IUserData>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IUserData> = data => {
	console.log("FormAuth-login-Data: ",data)
		if (type === 'login')  {
			login(data)} 
		else {
			register(data)
		}
		reset()
		router.push('/')
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
				<Heading variant={props}>Регистрация</Heading>
				<Field
					{...formRegister('name', {
						required: 'name не валидный',
						pattern: {
							value:   nameRegex,
							message: 'name не валидный',
						},
					})}
					id='registr_name'
					type='name'
					placeholder='name'
					style = {{... fieldStyles }}
					error={errors.name?.message}
				/>
			
				<Field
					{...formRegister('email', {
						required: 'email не валидный',
						pattern: {
							value: validEmail,
							 message: 'email не валидный',
						},
					})}
					id='registr_email'
					type='email'
					placeholder='email'
					style = {{... fieldStyles }}
					error={errors.email?.message}
				/>
				<Field
					{...formRegister('avatarPath', {
			  //required: Сообщение об ошибке
						required: 'avatarPath не валидный',
						// pattern: {
						// 	value: urlRegex,
						// 	message: 'avatarPath не валидный',
						// },
					})}
					id='registr_avatarPath'
					type='avatarPath'
					placeholder='avatarPath'
					style = {{... fieldStyles }}
					error={errors.avatarPath?.message}
				/>
				<Field
					{...formRegister('phone', {
						required: 'phone не валидный',
				//pattern: Объект с указанием регулярного выражения 
						pattern: {
							value:  phone,
							message: 'phone не валидный',
						},
					})}
					id='registr_phone'
					type='phone'
					placeholder='phone'
					style = {{... fieldStyles }}
					error={errors.phone?.message}
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
					id='registr_password'
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

export default FormAuth

// 4:32

//  ==============================================================

/*

const FormAuthRegistr = () => {

	async function formProcessing(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const formData = new FormData(event.target as HTMLFormElement)
		const name = formData.get('name')?.toString().trim()
		const email = formData.get('email')?.toString().trim()
		const avatarPath = formData.get('avatarPath')?.toString().trim()
		const phone = formData.get('phone')?.toString().trim()
		const password = formData.get('password')?.toString().trim()
		const array = JSON.stringify({ name, email, avatarPath, phone, password })
		await AuthService.createUser(array)
	}
	return (
		<div className={styles.container}>
			<form onSubmit={formProcessing} className={styles.container_form}>
				<input
					className={styles.container_form_input}
					type='text'
					name='name'
					placeholder='name'
					// value=' name'
				/>
				<input
					className={styles.container_form_input}
					type='text'
					name='email'
					placeholder='email'
					//value='email'
				/>
				<input
					className={styles.container_form_input}
					type='text'
					name='avatarPath'
					placeholder='avatarPath'
					//value='avatarPath'
				/>
				<input
					className={styles.container_form_input}
					type='text'
					name='phone'
					placeholder='phone'
					//value='phone'
				/>
				<input
					className={styles.container_form_input}
					type='text'
					name='password'
					placeholder='password'
					//value='password'
				/>
				<input
					className={styles.container_form_btn}
					type='submit'
					value='отправить'
				/>

			</form>
		</div>
	)
}

export default FormAuthRegistr
*/
