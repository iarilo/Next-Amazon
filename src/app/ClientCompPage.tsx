'use client'
import React, { FC } from 'react'
import CatalogPagination from '@/ui/catalog/CatalogPagination'
import { TypePaginationProducts } from 'types/product.interface'
import ShopHedar from '@/ui/hedar/ShopHedar'
import styles from './page.module.css'
import Layout from '@/ui/layout/Layout'




const ClientCompPage: FC<TypePaginationProducts> = ({ products, length,categories }) => {
	return (
		<div className={styles.container_ClientCompPage}>
			<ShopHedar />
			<div className={styles.container_ClientCompPage_component}>
				<CatalogPagination data={{ products, length,categories }} />
			</div>
		</div>
	)
}

export default ClientCompPage

/*

// -------------------- вариант с <Layout> -------------------
const ClientCompPage: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Layout>
			<div className={styles.container_ClientCompPage}>
				<div className={styles.container_ClientCompPage_component}>
					<CatalogPagination data={{ products, length }} />
				</div>
			</div>
		</Layout>
	)
}

export default ClientCompPage
*/
