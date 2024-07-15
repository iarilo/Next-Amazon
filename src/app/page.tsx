'use client'
import Image from 'next/image';
import style from './page.module.css'
import { AuthService } from 'services/auth/auth.service';
import { useState } from 'react';
import { IUser } from 'types/type-user.interface';




export default function Home() {
  const [user, setUser] = useState<IUser>()
  async function ButtonUser(){
    const profile = await AuthService.getProfileUser()
  setUser(profile)
   }
  return (
    <main >
    
    <h1 className={style.home}>hellow </h1>
    {user?.map((ell)=>
      <ul key={ell.id}>
      <li>id: {ell.id}</li>
      <li>email: {ell.email}</li>
      <li>name: {ell.name}</li>
      <li>phone: {ell.phone}</li>
      <li>password: {ell.password}</li>
   </ul>
    )}
     <button 
      type="submit"
      onClick={()=> ButtonUser()}
      >
      user
      </button>  
     
        <hr />
        <br />
         
  
    </main>
  )
}
