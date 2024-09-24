"use server"
import { cookies } from 'next/headers';
import { headers } from 'next/headers'
 
export   async function cookieGet() {
  const cookieStore = cookies()
  const token =  cookieStore.get('accesToken')

  //console.log(' cookie.server - token =', token?.value)
  return  token?.value
}

