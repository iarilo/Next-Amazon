"use client"
import { useState } from 'react'
import { useProfile } from 'store/hooks-reduxer/hooks-redux'
import Image from 'next/image'
import styles from '../page.module.css'
import ComponentProfile from './profile/ComponentProfile'

const HeaderProfile = () => {
	const [isProfile, setIsprofile] = useState(false)
	const { profile } = useProfile()
	if (!profile) return null
	// console.log("Profile =",profile)
	// console.log("Profile.avatar =",profile?.data.avatarPath)

	function profileClick() {
		if (isProfile === false) {
			setIsprofile(true)
		} else {
			setIsprofile(false)
		}
	}
	return (
		<div className={styles.container_HeaderProfile}>
			<h6 style={{ color: '#ffffff', margin: '0' }}>HeadarProfile</h6>
			{profile?.data.avatarPath && (
				<Image
					src={profile.data.avatarPath}
					alt={profile.data.name}
					width={25}
					height={25}
					className={styles.container_HeaderProfile_Image}
					onClick={profileClick}
				/>
			)}

			{isProfile && (
				<ComponentProfile  profile={profile?.data} />
			)}
		</div>
	)
}

export default HeaderProfile
