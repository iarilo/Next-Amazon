import React,{FC, PropsWithChildren} from 'react';
import styles from './page.module.css';
import cn from 'clsx'
interface IHeiding{
    children:string;
    className?: string;
    variant: 'orange' | 'white' 
}


const Heading:FC< PropsWithChildren<IHeiding>> = ({className,children,variant}) => {
  return (
    <h1 className={className} style={{
      fontSize:'medium',
      textAlign:'center',
      color: variant === 'orange'? 'orange' : 'white'
    }} 
        // className={`text-opacity-80 font-semibold ${className?.includes('x1') ? '' : 'text-3x1'}${className}`}
    >
         {children}
    </h1>
  )
}

export default Heading