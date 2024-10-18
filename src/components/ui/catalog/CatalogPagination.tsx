import React, { FC, useEffect, useState } from 'react'
import {
	EnumProductSort,
	EnumProductSortCategory,
	IProduct,
	TypePaginationProducts,
} from 'types/product.interface'
import styles from './product-item/page.module.css'
import Saidbar from '../saidbar/Saidbar'
import SortDropdown from './SortDropdown'
import Button from '../Button'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from 'services/product/product.service'
import { ICategory } from 'types/category.interface'
import ListProductSort from './product-item/ListProductSort'
import SortDropdownCategory from './SortDropdownCategory'

/*
export enum EnumProductSort{
	HIGH_PRICE = "high-price",  
	LOW_PRICE  = "low-price",  
	NEWEST  = "newest",        
	OLDEST = "oldest"  
  }
  */

/* 
 export enum EnumProductSortCategory{
  FOOTWEAR ='footwear',
  TOUS ='toys',
  CLOTHER ='clother',
  SPORT = 'sport'   
} 
  */

interface ICatalogPagination {
	data: TypePaginationProducts
}

const CatalogPagination: FC<ICatalogPagination> = ({ data }) => {
	//sortType: клячи из  EnumProductSort которые получаю из SortDropdawn при выборе сортировки
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST,
	)
	const [clicker, setClicker] = useState(false)
	const [typeCategory, setTypeCategory] = useState<{
		categoryValue: string
		categoryIndex: number
	}>({
		categoryValue: '',
		categoryIndex: 1,
	})

	const { categoryValue} = typeCategory

	// page: номер страницы полученный при нажатии на кнопку из  response.length / 4
	const [page, setPage] = useState(1)

	const { categories } = data
	const categoryName: string[] = categories?.map(ell => ell.name) || []
	

	const { data: response } = useQuery({
		queryKey: ['products', sortType, page, categoryName, categoryValue],
		queryFn: () => {
			return ProductService.getAllProduct({
				page: page,
				perPage: 1,
				sort: sortType,
				categorySort: categoryName,
				searchTerm: '',
			})
		},
		initialData: data, // начальные данные
	})
  // Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.
  // totalPages колличество страниц
	const totalPages = Math.ceil(response.length / 4)
	const filterCategoryes = response.categories.filter(ell => ell.name === categoryValue)
	return (
		<section className={styles.Section_Catalog}>
			<Saidbar />
			<div className={styles.Section_Catalog_component}>
				<div className={styles.Section_Catalog_SortDropdown}>
					<SortDropdownCategory
						typeCategory={typeCategory}
						setTypeCategory={setTypeCategory}
						setClicker={setClicker}
						categoryName={categoryName}
						setPage={setPage}
					/>

					<SortDropdown sortType={sortType} setSortType={setSortType} />
				</div>

				<div className={styles.Section_Catalog_container}>
					<div className={styles.Section_Catalog_content}>
						{clicker ? (
							filterCategoryes?.map((ell: ICategory) => (
								<ListProductSort key={ell.id} product={{ ...ell }} />
							))
						) : (
							<div className={styles.Section_Catalog_content}>
								{response.length ? (
									response.categories?.map((ell: ICategory) => (
										<ListProductSort key={ell.id} product={{ ...ell }} />
									))
								) : (
									<div> продукт отсутствует</div>
								)}
							</div>
						)}
					</div>
					{/* <div className={styles.Section_Catalog_content}>
						{response.length ? (
							response.categories?.map((ell: ICategory) => (
								<ListProductSort key={ell.id} product={{ ...ell }} />
							))
						) : (
							<div> продукт отсутствует</div>
						)}
					</div> */}
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
					{
						/*   
                 Статический Array.from()метод создает новый, поверхностно скопированный Array экземпляр 
				console.log(Array.from([1, 2, 3], (x) => x + x));
                // Expected output: Array [2, 4, 6]
                    ..........................................
                Array.from(arrayLike, mapFn, thisArg)
				arrayLike: Итерируемый или подобный массиву объект для преобразования в массив.
                    ..........................................
                mapFn Необязательный: Функция для вызова каждого элемента массива.
				Функция вызывается со следующими аргументами:
                        element: Текущий обрабатываемый элемент в массиве.
                        index: Индекс текущего обрабатываемого элемента в массиве.
                        thisArg Необязательный: Значение, используемое this при выполнении mapFn.
                 */
				// Array.from= (4) [0:undefined, 1:undefined, 2:undefined, 3:undefined] массив с ключами всех  четырёх  страниц 

						Array.from({ length: totalPages }).map((_, index) => {
							//console.log("Index=",index + 1)
							//  index номер страницы
							const pageNumber = index + 1

							return (
								<Button
									key={index}
									size='smol'
									variant={page === pageNumber ? 'orange' : 'white'}
									onClick={() => {
										setPage(pageNumber)
										setClicker(false)
									}}
								>
									{pageNumber}
								</Button>
							)
						})
					
					}
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
