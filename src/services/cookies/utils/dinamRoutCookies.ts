'use server'
import { cookies } from "next/headers";

export async function dinamRoutCookies() {
   const tokens =	 cookies().get('accesToken')?.value || '';
	return tokens
}