"use server"
//"use client"
//import { useEffect, useState } from 'react'
//import { getCookiesToken } from "services/cookies/cookie.helper"


const Category = async () => {
    /*
	const [token, setToken] = useState()

	useEffect(() => {
		async function getToken() {
			const data = await cookieToken()
			setToken(data)
		}
		getToken()
	}, [])
 */

 //

    //console.log('Token - Category =',token)
    
	return (
		<div style={{padding:'20px',width:'70%'}}>
			<h3 style={{ color: '#ffffff',textAlign:'center' }}> Category </h3>
            {/* <p style={{ color: '#ffffff',wordWrap: 'break-word' }}> accesToken: {token}</p> */}
		</div>
	)
}

export default Category

/*
import { useCookiesClientTocen } from "services/cookies/cookie.client"

const Category = () => {

	const token = useCookiesClientTocen()

	console.log('Category token =', token)
	return (
		<div>
			<h3 style={{ color: '#ffffff' }}>Category</h3>
		</div>
	)
}
ex
port default Category
*/
