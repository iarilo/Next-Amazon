
import style from './page.module.css'
import ClientCompPage from './ClientCompPage'
import { ProductService } from 'services/product/product.service'
//import { getCookiesToken } from 'services/cookies/cookie.helper'
//import cookieTest from 'services/cookies/cookie.server'

export const revalidate = 60


async function getProducts() {
	const data = await ProductService.getAllProduct({
		page: 1, // страница
		perPage: 4, // количество картинок на странице
	})
	return data
}

export default async function Home() {
	// const [user, setUser] = useState<IUser>()
	// async function ButtonUser() {
	// 	const profile = await AuthService.getProfileUser()
	// 	setUser(profile)
	// }
   	// }

	// const token = await getCookiesToken()
	// console.log('Home - token =', token)
	
	const dataProduct = await getProducts()
	const { products, length,categories } = dataProduct

	return (
		<main className={style.main}>

			<h3 className={style.home}>Домашняя страница </h3>
			<div>
				 <ClientCompPage 
				products={products} 
				length={length} 
				categories={categories}
				/> 
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
