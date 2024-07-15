import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'

const NavBar = () => {
	return (
		<div className={styles.container_navBar}>
			<nav className={styles.container_navBar_List_Link}>
				<Link className={styles.List_Link} href={'/'}>
					home
				</Link>
				<Link className={styles.List_Link} href={'/admin'}>
					admin
				</Link>
				<Link className={styles.List_Link_Auth} href={'/registration'}>
					registration
				</Link>
				<Link className={styles.List_Link_Auth} href={'/login'}>
					login
				</Link>
			</nav>
		</div>
	)
}

export default NavBar
