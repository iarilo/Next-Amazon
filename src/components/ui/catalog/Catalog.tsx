import React, { FC, useState } from 'react'
import {
	IProduct,
	TypePaginationProducts,
	TypeProducts,
} from 'types/product.interface'
import ProductItem from './product-item/ProductItem'
import Loading from 'app/loading'
import styles from './product-item/page.module.css'


const Catalog: FC<{
	catalogProducts: TypePaginationProducts
	isLoading?: boolean
}> = ({ catalogProducts, isLoading }) => {
	const { products } = catalogProducts
	const categoryProduct = products.map((ell: IProduct) => ell.category)
	let sport
	let footwear
	let clothes
	let toys
	let error

	for (let index of categoryProduct) {
		if (index.name === 'спорт') {
			const filterProduct = products.filter(
				ell => ell.category.name === index.name,
			)
			sport = filterProduct
		} else if (index.name === 'обувь') {
			const filterProduct = products.filter(
				ell => ell.category.name === index.name,
			)
			footwear = filterProduct
		} else if (index.name === 'одежда') {
			const filterProduct = products.filter(
				ell => ell.category.name === index.name,
			)
			clothes = filterProduct
		} else if (index.name === 'Игрушки') {
			const filterProduct = products.filter(
				ell => ell.category.name === index.name,
			)
			toys = filterProduct
		} else {
			error = 'товар не загружается'
		}
	}

	if (isLoading) <Loading />

	return (
		<section className={styles.Section_Catalog}>
			<div className={styles.Section_Catalog_container}>
				<h3 className={styles.Section_Catalog_h3}>Спорт</h3>
				<div className={styles.Section_Catalog_content}>
					{catalogProducts.length ? (
						sport?.map((ell: IProduct) => (
							<ProductItem key={ell.id} product={{ ...ell }} />
						))
					) : (
						<div> продукт отсутствует</div>
					)}
				</div>
			</div>

			<div className={styles.Section_Catalog_container}>
				<h3 className={styles.Section_Catalog_h3}>Обувь</h3>
				<div className={styles.Section_Catalog_content}>
					{catalogProducts.length ? (
						footwear?.map((ell: IProduct) => (
							<ProductItem key={ell.id} product={{ ...ell }} />
						))
					) : (
						<div> продукт отсутствует</div>
					)}
				</div>
			</div>

			<div className={styles.Section_Catalog_container}>
				<h3 className={styles.Section_Catalog_h3}>Одежда</h3>
				<div className={styles.Section_Catalog_content}>
					{catalogProducts.length ? (
						clothes?.map((ell: IProduct) => (
							<ProductItem key={ell.id} product={{ ...ell }} />
						))
					) : (
						<div> продукт отсутствует</div>
					)}
				</div>
			</div>

			<div className={styles.Section_Catalog_container}>
				<h3 className={styles.Section_Catalog_h3}>Игрушки</h3>

				<div className={styles.Section_Catalog_content}>
					{catalogProducts.length ? (
						toys?.map((ell: IProduct) => (
							<ProductItem key={ell.id} product={{ ...ell }} />
						))
					) : (
						<div> продукт отсутствует</div>
					)}
				</div>
			</div>

			{<p>{error}</p>}
		</section>
	)
}

export default Catalog
