"use client"
import React, { FC } from 'react'
import { IMayProfile } from 'types/type-user.interface'
import ItemProfile from './itemProfile'
import styles from './page.module.css'
import Image from 'next/image'
import { useActionsRedux } from 'store/hooks-reduxer/hooks-redux'
import { useRouter } from 'next/navigation'

interface IProfile {
	profile: IMayProfile
}
const ComponentProfile: FC<IProfile> = ({ profile }) => {
	const router = useRouter()
	const { logout } = useActionsRedux()
	const { name, email, phone, favorites } = profile

	function click (){
		logout()
		router.push('/login')
	}
	return (
		<div className={styles.container_ComponentProfile}>
			<h6> ComponentProfile</h6>
			<h5>имя: {name}</h5>
			<p>email: {email}</p>
			<span>тел: {phone}</span>
			<div className={styles.container_ComponentProfile_favorites}>
				{favorites.map(ell => (
					<ul key={ell.id}>{<ItemProfile items={ell.images} id={ell.id} />}</ul>
				))}
			</div>

			<div className={styles.container_ComponentProfile_logout}>
				<span> выход </span>
				{profile ? (
					<Image
						src={
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmbqVV4Jd99iMwj7l1gEwF_qUWyhlOKQKCg&s'
						}
						alt='icon' width={20}  height={20}
						onClick={click}
						className={styles.container_ComponentProfile_logout_img}
					/>
				) : ( <p>данные отсутствуют</p>  )}
			</div>
		</div>
	)
}

export default ComponentProfile
