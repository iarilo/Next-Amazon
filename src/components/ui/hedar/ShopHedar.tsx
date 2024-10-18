'use client'
import { useEffect, useState } from 'react'
import styles from '../page.module.css'
import Link from 'next/link'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import HeaderProfile from './HeaderProfile'
import HeadarCart from './HeadarCart'
import Search from '../Search/Search'
import { dinamRoutCookies } from 'services/cookies/utils/dinamRoutCookies'

const ShopHedar = () => {
	const [tokenData, setTokenData] = useState<string>('')
	useEffect(() => {
		async function Data() {
			const token = await dinamRoutCookies()
			setTokenData(token)
		}
		Data()
	})

	

	return (
		<div className={styles.container_ShopHedar}>
			<h4 style={{ margin: '0', color: '#ffffff' }}> ShopHedar </h4>
			<div className={styles.container_ShopHedar_content}>
				<Search />

				{tokenData ? (
					<div className={styles.container_ShopHedar_button}>
						<div className={styles.container_ShopHedar_favorites}>
							<h6 style={{ color: '#ffffff', margin: '0' }}>Hedar Favorites</h6>
							<Link href='/favorites'>
								{' '}
								<AiFillHeart />{' '}
							</Link>
						</div>
						<HeadarCart />
						<HeaderProfile />
					</div>
				) : null}
			</div>
		</div>
	)
}

export default ShopHedar
