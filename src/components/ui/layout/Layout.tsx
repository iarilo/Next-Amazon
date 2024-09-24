import React, { FC, PropsWithChildren } from 'react';
import Saidbar from '../saidbar/Saidbar';
import ShopHedar from '../hedar/ShopHedar';
import styles from './page.module.css'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
       <h4 style={{color:'#ffffff', textAlign:'center'}}>Layout</h4>
			<ShopHedar />
			<div className={styles.container_content_layout} >
				<Saidbar />
				<main> {children} </main>
			</div>
		</div>
	)
}

export default Layout
