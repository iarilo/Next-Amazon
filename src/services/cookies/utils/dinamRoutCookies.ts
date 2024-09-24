'use server'
import { cookies } from "next/headers";

export async function dinamRoutCookies() {
	return cookies().get('accesToken')?.value || '';
	
}