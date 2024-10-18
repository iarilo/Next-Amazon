import {FC} from 'react'
import {ICategoryProduct,ICategory } from 'types/category.interface'
import { IProduct } from 'types/product.interface'
import styles from './page.module.css'
import AddToCardButton from './AddToCardButton '
import dynamic from 'next/dynamic'
import ProductRating from './ProductRating'
import Image from 'next/image'



const DynamicFavoriteButton = dynamic(
	()=> import('./FavoriteButton'),{ssr: false}
 )
const ListProductSort:FC<{product:ICategory}> = ({product}) => {

  const {products}= product
  const Id = products.map((ell)=>ell.id)
  // console.log('Product=',product)
   //console.log('Product.id=',product.id)
   //console.log('Product.products=',products)
   //console.log('Product.products.Id=',Id)
   
   return (
	   <div>
			<div>
				<h4 style={{textAlign:'center'}} >категория:
					 <span style={{color:'red'}} > {product.name}</span>
				</h4>
				<div className={styles.container_ProductItem} >
					{products.map((ell:IProduct)=> (
			// console.log('Product.products=',products)
					
					<div className={styles.content_ProductItem} key={ell.id}>
					<div className={styles.content_ProductItem_Cart}>
						<DynamicFavoriteButton productId={ell.id} />
						<AddToCardButton product={{...ell}} productId={ell.id} />
					</div>
                     

					<Image
						width={150}
						height={150}
						src={ell.images[0]}
						alt={ell.name}
						priority={true}
						className={styles.content_ProductItem_Image}
					/>

					<h3 className={styles.content_ProductItem_name}>
						<span className={styles.content_span_name}>
							название
							<span className={styles.content_spam_colon}>: </span>
						</span>
						{ell.name}
					</h3>
					<div className={styles.content_ProductItem_categoryName}>
						<span className={styles.content_span_category}>
							{' '}
							категория
							<span className={styles.content_span_colon}>: </span>
						</span>
						{ell.category ? ell.category.name : null}
					</div>
					<ProductRating product={{...ell}} idProduct={ell.id} />
					<div className={styles.content_ProductItem_prise}>
						<span className={styles.content_span_price}>
							цена
							<span className={styles.content_span_colon}>: </span>
						</span>
						{ell.prise}
						<span className={styles.content_ProductItem_RUB}> руб</span>
					</div>
				</div>

					
					
					
				)	) }
				</div>
			</div>
		</div>
	)
}

export default ListProductSort