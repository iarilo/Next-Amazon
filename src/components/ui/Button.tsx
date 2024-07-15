import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cn from 'clsx'
import styles from './page.module.css'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'orange' | 'white' ;
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	variant,
	className,
	...rest
}) => {
	
	return (
		<button
			{...rest}
			className={className}
			style={{
				border: '1px solid orange',
				borderRadius: '10px',
				fontFamily: 'Inter, sans-serif', // замените на ваш шрифт
				//fontWeight: '500', // замените на нужный вес шрифта
                fontSize: '12px',
				boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
				padding: '5px', // px-10 py-2 в Tailwind CSS
				color: variant === 'orange' ? 'white' : 'orange', // text-white или text-primary в Tailwind CSS
				backgroundColor: variant === 'orange' ? 'orange' : 'white', // bg-primary или bg-white в Tailwind CSS
			}}
		>
			{children}
		</button>

		/*
    <button {...rest} className={cn('rounded-2x1 font-medium shadow px-10 py-2',
      {
        'text-white bg-primary': variant == 'orange',
        'text-primary bg-white' : variant == 'white'
    },className)}>
      {children}
    </button>
    */
	)
}

export default Button
