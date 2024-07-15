import React,{forwardRef} from 'react';
import cn from 'clsx';
import { IField } from './field.interface';
import styles from '@/ui/page.module.css'

const Field  = forwardRef<HTMLInputElement,IField> (
    ({id,placeholder,error,className,type='text',style,Icon,...rest},ref) => {
        
        return (
            <div className={cn('',className)} style={style} >
                <label htmlFor={id}>
                 <span>
                    { Icon && <Icon/>}
                    {placeholder}
                 </span>
                 <input
                  id={id}
                  ref={ref}
                  type={type}
                  placeholder={placeholder}
                  {...rest}  />   
                </label>
                {error && <div className={styles.error} >{error}</div>}
        
            </div>
          )
    }

)
Field.displayName = 'Field'
export default Field