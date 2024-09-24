
import React, { FC, useState } from 'react'
import {
	EnumProductSort,
	IProduct,
	TypePaginationProducts,
} from 'types/product.interface'
import ProductItem from './product-item/ProductItem'
//import Loading from 'app/loading'
import styles from './product-item/page.module.css'
import Saidbar from '../saidbar/Saidbar'
import SortDropdown from './SortDropdown'
import Button from '../Button'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from 'services/product/product.service'

interface ICatalogPagination {
	data: TypePaginationProducts
}

const CatalogPagination: FC<ICatalogPagination> = ({ data }) => {
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST,
	)
	const [page, setPage] = useState(1)
	const { data: response } = useQuery({
		queryKey: ['products', sortType, page],
		queryFn: () => {
			return ProductService.getAllProduct({
				page: page,
				perPage: 4,
				sort: sortType,
			})
		},
		initialData: data, // начальные данные
	})

	//console.log('Data =',data)
	//console.log('Response =',response.products)
	// console.log('sortType =',sortType)
	// console.log('Page =',page)
	return (
		<section className={styles.Section_Catalog}>
            <Saidbar/>
			<div className={styles.Section_Catalog_component}  >
			<div className={styles.Section_Catalog_SortDropdown}>
				<SortDropdown sortType={sortType} setSortType={setSortType} />
			</div>

			<div className={styles.Section_Catalog_container}>
				<div className={styles.Section_Catalog_content}>
					{response.length ? (
						response.products?.map((ell: IProduct) => (
							<ProductItem key={ell.id} product={{ ...ell }} />
						))
					) : (
						<div> продукт отсутствует</div>
					)}
				</div>
			</div>

			{/* <div className={styles.Section_Catalog_container}>
				<div className={styles.Section_Catalog_content}>
					{response.length ? (
						response.products?.map((ell: IProduct) => (
							<ProductItem key={ell.id} product={{ ...ell }} />
						))
					) : (
						<div> продукт отсутствует</div>
					)}
				</div>
			</div> */}

			<div className={styles.Section_pagination_button}>
				{Array.from({ length: response.length / 4 }).map((_, index) => {
					const pageNumber = index + 1
					return (
						<Button
							key={index}
							size='smol'
							variant={page === pageNumber ? 'orange' : 'white'}
							onClick={() => setPage(pageNumber)}
						>
							{pageNumber}
						</Button>
					)
				})}
			</div>

			</div>
		</section>
	)
}

export default CatalogPagination

//=================================================

/*

interface ICatalogPagination {
	catalogProducts: TypePaginationProducts
}

const CatalogPagination: FC<ICatalogPagination> = ({ catalogProducts }) => {
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST,
	)
	const [page, setPage] = useState(1)

	const { data: response } = useQuery({
		queryKey: ['products', sortType],
		queryFn: () =>
			ProductService.getAllProduct({
				page: page,
				perPage: 4,
				sort: sortType,
			}),
	})

	//  .............................................
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
	// ...........................................

	return (
		<section className={styles.Section_Catalog}>
			<div className={styles.Section_Catalog_container}>
				{sport ? <h3 className={styles.Section_Catalog_h3}>Спорт</h3> : null}
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
				{footwear ? <h3 className={styles.Section_Catalog_h3}>Обувь</h3> : null}
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
				{clothes ? <h3 className={styles.Section_Catalog_h3}>Одежда</h3> : null}
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
				{toys ? <h3 className={styles.Section_Catalog_h3}>Игрушки</h3> : null}

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
			<div>
				<Button variant='orange' size='smol'>
					дальше
				</Button>
			</div>

			{<p>{error}</p>}
		</section>
	)
}

export default CatalogPagination

*/

//5:54
