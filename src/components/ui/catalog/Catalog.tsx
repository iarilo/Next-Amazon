import React, { FC } from 'react'
import { IProduct, TypePaginationProducts } from 'types/product.interface'
import ProductItem from './product-item/ProductItem'
import Loading from 'app/loading'
import styles from './product-item/page.module.css'
import Layout from '../layout/Layout'

type Product = {
	id: string
	name: string
}
interface ICatalogPagination {
	catalogProducts: IProduct[]
	//catalogProducts: Product[]
	isLoading?: boolean
	title?: string
}

const Catalog: FC<ICatalogPagination> = ({
	catalogProducts,
	isLoading,
	title,
}) => {
	if (isLoading) <Loading />

	return (
		<section>
			
				<div className={styles.Section_Catalog_container_params}>
					{title ? <h4>{title}</h4> : null}

					<div className={styles.Section_Catalog_content_params}>
						{catalogProducts ? (
							catalogProducts?.map((ell: IProduct) => (
								<ProductItem key={ell.id} product={{ ...ell }} />
							))
						) : (
							<div> продукт отсутствует</div>
						)}
					</div>
				</div>
			
		</section>
	)
}

export default Catalog
