import React, { FC, PropsWithChildren } from 'react';
import cn from 'clsx'

interface IHeading {
    className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({className, children}) => {
  return (

    <h1 className={ cn('font-semibold text-3x1' , className)}>
       {children}
    </h1>

    // <h1 className={` text-opacity-80 font-semibold ${
    //   className?.includes('xl:') ? '' : 'text-3xl'
    // } ${className}`}>
    //  {title}
    // </h1>
  )
}

export default Heading