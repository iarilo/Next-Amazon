import Button from '@/ui/Button'
//import Heading from '@/ui/Heading'
import type { Metadata } from 'next';
import React, { FC } from 'react'

export const metadata: Metadata = {
  title: 'AuthComponents',
 description: 'фронтэнд amazon  на next',
  
};

const Auth: FC = () => {
  return (
     <> 
    <div>Auth</div>

     <Button variant='white'>
        auth
     </Button>
     </>
  )
}

export default Auth
// 4;14