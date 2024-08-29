'use client'
import React, { FC } from 'react'
import Catalog from '@/ui/catalog/Catalog'
import { TypePaginationProducts} from 'types/product.interface'

const ClientCompPage: FC<TypePaginationProducts> = products => {
	return (
		<div>
			<h3 style={{ textAlign:'center',color:"blue" }}>Магазин</h3>
			<Catalog catalogProducts={products} />
		</div>
	)
}

export default ClientCompPage
