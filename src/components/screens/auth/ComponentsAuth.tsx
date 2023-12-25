import React, { FC } from 'react';
import Meta from '@/ui/Meta';
import Button from '@/ui/Button';


const AuthComponents: FC = () => {
  return( 
     <Meta title ='AuthComponents'> 
     <Button variant='orange'>
        auth
     </Button>
      </Meta>
  )
}

export default AuthComponents