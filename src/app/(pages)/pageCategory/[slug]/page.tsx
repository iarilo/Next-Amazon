"use server"
import { CategoryService } from 'services/category/category.service'
import { ProductService } from 'services/product/product.service'
import Catalog from '@/ui/catalog/Catalog'
import { dinamRoutCookies } from 'services/cookies/utils/dinamRoutCookies'

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({params:{ slug }}: CategoryPageProps ) {

    dinamRoutCookies()

	const category = await CategoryService.getBySlug({ slug })
	const {name} = category.data 
	const products = await ProductService.getByCategory(slug)
// Извлечь токен из файлов cookie
//   const token = cookies().get('accesToken')?.value || '';
//   const axiosInstance = await authDinamic(token);

//   // Извлечь данные о категориях и продуктах
//   const [category, products] = await Promise.all([
//     CategoryService.getBySlug({ slug }, axiosInstance),
//     CategoryService.getBySlug({ slug }),
//     ProductService.getByCategory(slug),
//   ]);
  return (
    <div>
      <h4 style={{ color: 'white', textAlign: 'center' }}>
        CategoryPage/slug{' '}
      </h4>
      <Catalog catalogProducts={products.data || []} title={name} />
    </div>
  );
}




// =================== Вариант с "use client" ========================

/*
// export async function generateStaticParams() {
// 	const  categoryes = await CategoryService.getAll()
// 	 const path =  categoryes.data.map((category) => {
// 	 return {
// 		params:{slug:category.slug}
// 	   }
// 	 })
// 	 return path
// }



const CategoryPage = ({ params }: IParams) => {
	//const decodedSlug = decodeURIComponent(params.slug);
	const [product, setProduct] = useState<IProduct[]>()
	const [categoryName, setCategoryName] = useState<string>()

	const data = getProducts(params)
	const { products, category } = data

	useEffect(() => {
		const dataParams = async () => {
			setProduct((await products).data)
			setCategoryName((await category).data.name)
		}
		dataParams()
	}, [params])

	return (
		<div>
			<h4 style={{ color: 'white' }}> </h4>
			<Catalog catalogProducts={product || []} title={categoryName} />
		</div>
	)
}

export default CategoryPage

*/

// -----------------------------------------

/*
// -------------  вариант с Layout --------------
type TypeParamsSlug = {
	slug?:string
}

interface ICategoryPage {
	params: TypeParamsSlug
  }

    export async function generateStaticParams() {
	const categories = await CategoryService.getAll()

	const paths = categories.data.map(ell => {
	return {params:{slug: ell.slug}}	
	})
	return paths
   }


 async function getProducts(params: TypeParamsSlug) {
try {
const products = ProductService.getByCategory(
	params?.slug as string
)
const {data: category} = await CategoryService.getBySlug(
	params?.slug as string
)
return { products, category }
   } catch (error) { console.error('Ошибка getProducts data :')}
}
	
const CategoryPage = async ({params}:ICategoryPage ) => {
const data = await getProducts(params)
	return (
		<div>
	   			<h4 style={{ color: 'white' }}> </h4>
	    		<Catalog catalogProducts={data?.products || []} title={data?.category.name} /> 
				</div>
	)
}

export default CategoryPage
*/
// -------------------------------------------------------