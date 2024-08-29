import Image from 'next/image'
import style from './page.module.css'
import { AuthService } from 'services/auth/auth.service'
import { FC, useState } from 'react'
import { IUser } from 'types/type-user.interface'
import ClientCompPage from './ClientCompPage'
import { GetStaticProps, NextPage } from 'next'
import {
	IProduct,
	TypePaginationProducts,
	TypeProducts,
} from 'types/product.interface'
import { ProductService } from 'services/product/product.service'
import { CategoryService } from 'services/category/category.service'

// export async function generateStaticParams <TypeProducts> (){
// 	const {data: products} = await ProductService.getAllProduct({
// 		page: 1,
// 		perPage: 4
// 	})

// 	console.log('generateStaticParams - products =', products)
// 	return {
// 		props:{
// 			products
// 		}
// 	  }
// }

export const revalidate = 60

async function getProducts<TypePaginationProducts>() {
	const data = await ProductService.getAllProduct({
		page: 1, // страница
		perPage: 16, // количество картинок на странице
	})
	return data
}

export default async function Home() {
	// const [user, setUser] = useState<IUser>()
	// async function ButtonUser() {
	// 	const profile = await AuthService.getProfileUser()
	// 	setUser(profile)
	// }

	const dataProduct = await getProducts()
	const { data } = dataProduct

	return (
		<main>
			<h3 className={style.home}>Домашняя страница </h3>
			<div>
				<ClientCompPage products={data.products} length={data.length} />
			</div>

			<br />
			<hr style={{ border: '2px solid green', width: '80%' }} />

			{/* ---------------------------------- */}
			{/* {user?.map(ell => (
				<ul key={ell.id}>
					<li>id: {ell.id}</li>
					<li>email: {ell.email}</li>
					<li>name: {ell.name}</li>
					<li>phone: {ell.phone}</li>
					<li>password: {ell.password}</li>
				</ul>
			))}
			<button type='submit' onClick={() => ButtonUser()}>
				user
			</button> */}
		</main>
	)
}
// 5:05
